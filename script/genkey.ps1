
function read-or-default {
    Param
    (
         [Parameter(Mandatory=$true, Position=0)]
         [string] $text,
         [Parameter(Mandatory=$true, Position=1)]
         [string] $default
    )
    $a = Read-Host "$text [$default]"
    if ($a.Length -eq 0) {
        $a = $default
    } 
    $a
}
Function Test-CommandExists {
    Param ($command)
    $oldPreference = $ErrorActionPreference
    $ErrorActionPreference = ‘stop’
    try {
        if (Get-Command $command) {
            1
        }
    }
    Catch {
        0
    }
    Finally {
        $ErrorActionPreference = $oldPreference
    }
} #end function test-CommandExists

if (-Not (Test-CommandExists "openssl")) {
    Write-Output "openssl does not appear to be in path."
    exit -1
}

function New-Folder {
    param (
        [Parameter(Mandatory=$true, Position=0)]
        [string] $name
    )
    if (-Not (Test-Path -PathType Container $Name)) {
        New-Item -Type Directory -p $Name
    }        
}

$ROOTPATH = read-or-default "rootpath" "." 

$PATH_CA = "$ROOTPATH/certs/ca"
$PATH_SERVER = "$ROOTPATH/certs/server"
$PATH_CLIENT = "$ROOTPATH/certs/client"
$PATH_TMP = "$ROOTPATH/certs/tmp"

New-Folder($PATH_CA)
New-Folder($PATH_SERVER)
New-Folder($PATH_CLIENT)
New-Folder($PATH_TMP)

Write-Output ""
Write-Output  "      _____      _  __        _____ _                      _                   "
Write-Output  "     /  ___|    | |/ _|      /  ___(_)                    | |                  "
Write-Output  "     \ \`--.  ___| | |_ ______\ \`--. _  __ _ _ __   ___  __| |                "
Write-Output  "      \`--. \/ _ \ |  _|______|\`--. \ |/ _\` | '_ \ / _ \/ _\` |              "
Write-Output  "     /\__/ /  __/ | |        /\__/ / | (_| | | | |  __/ (_| |                  "
Write-Output  "     \____/ \___|_|_|        \____/|_|\__, |_| |_|\___|\__,_|                  "
Write-Output  "                                       __/ |                                   "
Write-Output  "                                      |___/                                    "
Write-Output  "    _____           _         _____                           _                "
Write-Output  "   /  __ \         | |       |  __ \                         | |               "
Write-Output  "   | /  \/ ___ _ __| |_ ___  | |  \/ ___ _ __   ___ _ __ __ _| |_ ___  _ __    "
Write-Output  "   | |    / _ \ '__| __/ __| | | __ / _ \ '_ \ / _ \ '__/ _\` | __/ _ \| '__|  "
Write-Output  "   | \__/\  __/ |  | |_\__ \ | |_\ \  __/ | | |  __/ | | (_| | || (_) | |      "
Write-Output  "    \____/\___|_|   \__|___/  \____/\___|_| |_|\___|_|  \__,_|\__\___/|_|      "
Write-Output  "                                                                               "
Write-Output  ""

Write-Output  ""
Write-Output  " Global conf "
Write-Output  ""

$RSABITS = read-or-default "RSA bit length" "4096" 
$EXPIREDAYS  = read-or-default "Expire days" "365" 

$PASSWORD = "."
while ($PASSWORD.Length -lt 4) {
    $PASSWORD = read-or-default "Password for certs" "jspurefix" 
    if ($PASSWORD.Length -lt 4) {
        Write-Output "Password length cannot be lower than 4 chars"
    }
}

Write-Output  ""
Write-Output  " OpenSSL conf "
Write-Output  ""

# Classic openssl prompt

$GK_C = read-or-default "(C) Country Name (2 letter code)" "US" 
$GK_ST = read-or-default "(ST) State or Province Name (full name)" "." 
$GK_L = read-or-default "(L) Locality Name (eg, city)" "city"
$GK_O  = read-or-default "(O) Organization Name (eg, company)" "ACME Signing Authority Inc" 
$GK_OU  = read-or-default "(OU) Organizational Unit Name (eg, section) " "." 
$GK_CN  = read-or-default "(CN) Common Name (eg, your name or your server's hostname) " "localhost" 

$GK_emailAddress = Read-Host "(emailAddress) Email Address []:"
if ($GK_emailAddress.Length -gt 0) {
    $GK_emailAddress = "/emailAddress=$GK_emailAddress"
}

Write-Output "Please enter the following 'extra' attributes"
Write-Output "to be sent with your certificate request"
$GK_unstructuredName = Read-Host "(unstructuredName) An optional company name []:" 
if ($GK_unstructuredName.Length -gt 0) {
    $GK_unstructuredName = "/unstructuredName=$GK_unstructuredName"
}

$OTHER_FIELDS = ""
$ADD_OTHER_FIELD = "Y"
while ($ADD_OTHER_FIELD -eq "y" || $ADD_OTHER_FIELD -eq "Y") {
    $ADD_OTHER_FIELD = read-or-default "Add other field [y/N]" "N"
    if ($ADD_OTHER_FIELD -eq "y" || $ADD_OTHER_FIELD -eq "Y") {
        $OTHER_FIELD_NAME = Read-Host "Field name: "
        $OTHER_FIELD_VALUE = Read-Host "Field value: "
        if ($OTHER_FIELD_VALUE.Length -eq 0) {
            OTHER_FIELD_VALUE="."
        }
        $OTHER_FIELDS = "$OTHER_FIELDS/$OTHER_FIELD_NAME=$OTHER_FIELD_VALUE"
    }
}

Write-Output  ""
Write-Output  "Generate certs "
Write-Output  ""

# CA 
Write-Output  ""
Write-Output  "CA"
Write-Output  ""

openssl genrsa -des3 -passout "pass:$PASSWORD" -out "$PATH_CA/ca.key" $RSABITS

# Create Authority Certificate
openssl req -new -x509 -days "$EXPIREDAYS" -key "$PATH_CA/ca.key" -out "$PATH_CA/ca.crt" -passin "pass:$PASSWORD" -subj "/C=$GK_C/ST=$GK_ST/L=$GK_L/O=$GK_O/OU=$GK_OU/CN=.$GK_unstructuredName$GK_emailAddress$GK_subjectAltName$OTHER_FIELDS"

# SERVER 
Write-Output  ""
Write-Output  "Server"
Write-Output  ""

# Generate server key
openssl genrsa -out "$PATH_SERVER/server.key" $RSABITS

# Generate server cert
openssl req -new -key "$PATH_SERVER/server.key" -out "$PATH_TMP/server.csr" -passout "pass:$PASSWORD" -subj "/C=$GK_C/ST=$GK_ST/L=$GK_L/O=$GK_O/OU=$GK_OU/CN=$GK_CN$GK_unstructuredName$GK_emailAddress$GK_subjectAltName$OTHER_FIELDS"

# Sign server cert with self-signed cert
openssl x509 -req -days "$EXPIREDAYS" -passin "pass:$PASSWORD" -in "$PATH_TMP/server.csr" -CA "$PATH_CA/ca.crt" -CAkey "$PATH_CA/ca.key" -set_serial 01 -out "$PATH_SERVER/server.crt"

# CLIENT 

Write-Output  ""
Write-Output  "Client"
Write-Output  ""

openssl genrsa -out "$PATH_CLIENT/client.key" $RSABITS

openssl req -new -key "$PATH_CLIENT/client.key" -out "$PATH_TMP/client.csr" -passout "pass:$PASSWORD" -subj "/C=$GK_C/ST=$GK_ST/L=$GK_L/O=$GK_O/OU=$GK_OU/CN=CLIENT$GK_unstructuredName$GK_emailAddress$GK_subjectAltName$OTHER_FIELDS"

openssl x509 -req -days 365 -passin "pass:$PASSWORD" -in "$PATH_TMP/client.csr" -CA "$PATH_CA/ca.crt" -CAkey "$PATH_CA/ca.key" -set_serial 01 -out "$PATH_CLIENT/client.crt"

# Clean tmp dir

Remove-Item -Recurse $PATH_TMP

Write-Output  ""
Write-Output  "Done !"

exit 0
