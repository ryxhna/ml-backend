cd ml-backend
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
exit

// buka wsl nya lagi
nvm install 20
nvm use 20
node --version

----------------------------------------------------------------------------------

npm install @hapi/hapi @tensorflow/tfjs-node@4.14.0 @google-cloud/firestore dotenv

sudo rm -rf *
ls
git clone -b sertaMulia-lab https://github.com/dicodingacademy/a658-machine-learning-googlecloud.git .

clear
npm install

----------------------------------------------------------------------------------
// install gcloud sdk di wsl
sudo apt-get update
sudo apt-get install apt-transport-https ca-certificates gnupg curl
curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg
echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list
sudo apt-get update && sudo apt-get install google-cloud-cli

gcloud --version


// Langkah adc
gcloud init --no-launch-browser 
gcloud auth applciation-default login --no-launch-browser
gcloud config get-value project

npm run start

----------------------------------------------------------------------------------

> docker --> microservices = untuk seminimal mungkin projectnya 
> .dockerignore --> membuat file yang dipilih gak diikut run/mengecualikan file ketika membuat dockerimage 
> create Dockerfile

cd .
gcloud run deploy --source . --port 3000
submissionmlgc-ghinadesrizky

----------------------------------------------------------------------------------

> Allow unauthenticated invocations to [submissionmlgc-ghinadesrizky] (y/N)? 
> ini supaya mengizinkan orang-orang yang hanya memiliki akses tertentu untuk mengakses endpoin 
> (cek permission IAM: Cloud Run -> Admin, Developer, Invoker)
> auto allow = semua orang bisa connect ke endpoint kalian

autentication = ketika login artinya memberikan informasi (siapa nih), bener ga memastikan -> bisa login gak ya
authorization = ketika login kira-kira lu punya akses ke sumber daya itu gak

----------------------------------------------------------------------------------

// cara send di postman
https://submissionmlgc-ghinadesrizky-5l5k5gw4oa-et.a.run.app/predict

// link submissions
https://submissionmlgc-ghinadesrizky.et.r.appspot.com/


----------------------------------------------------------------------------------
DEPLOY ULANG === LANGKAH ADC

----------------------------------------------------------------------------------


gcloud init --no-launch-browser 
gcloud auth application-default login --no-launch-browser
n

// cek permission di wsl usah terhubung belum sm projectnya
gcloud config get-value project

cd .
gcloud run deploy --source . --port 3000
submissionmlgc-ghinadesrizky

----- buka cloud shell terminal -----
cd asclepius
ls
clear
gcloud app deploy

// test di postman
https://submissionmlgc-ghinadesrizky-5l5k5gw4oa-et.a.run.app[:PORT]/predict