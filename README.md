### Prepare
`cd ml-backend`<br>
`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash`<br>
`exit`<br><br>

### buka wsl nya lagi<br>
`nvm install 20`<br>
`nvm use 20`<br>
`node --version`<br><br>

----------------------------------------------------------------------------------<br>
`npm install @hapi/hapi @tensorflow/tfjs-node@4.14.0 @google-cloud/firestore dotenv`<br><br>

`sudo rm -rf *`<br>
`ls`<br>
`git clone -b sertaMulia-lab https://github.com/dicodingacademy/a658-machine-learning-googlecloud.git .`<br>

`clear`<br>
`npm install`<br>

----------------------------------------------------------------------------------<br>
### install gcloud sdk di wsl<br>
`sudo apt-get update`<br>
`sudo apt-get install apt-transport-https ca-certificates gnupg curl`<br>
`curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg`<br>
`echo "deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main" | sudo tee -a /etc/apt/sources.list.d/google-cloud-sdk.list`<br>
`sudo apt-get update && sudo apt-get install google-cloud-cli`<br>

`gcloud --version`<br>


### Langkah adc<br>
`gcloud init --no-launch-browser`<br>
`gcloud auth applciation-default login --no-launch-browser`<br>
`gcloud config get-value project`<br><br>

`npm run start`<br><br>

----------------------------------------------------------------------------------<br><br>

> docker --> microservices = untuk seminimal mungkin projectnya <br>
> .dockerignore --> membuat file yang dipilih gak diikut run/mengecualikan file ketika membuat dockerimage <br>
> create Dockerfile<br>

`cd .`<br>
`gcloud run deploy --source . --port 3000`<br><br>

----------------------------------------------------------------------------------<br><br>

> Allow unauthenticated invocations to [...] (y/N)? <br>
> ini supaya mengizinkan orang-orang yang hanya memiliki akses tertentu untuk mengakses endpoin <br>
> (cek permission IAM: Cloud Run -> Admin, Developer, Invoker)<br>
> auto allow = semua orang bisa connect ke endpoint kalian<br>

autentication = ketika login artinya memberikan informasi (siapa nih), bener ga memastikan -> bisa login gak ya<br>
authorization = ketika login kira-kira lu punya akses ke sumber daya itu gak<br><br>

----------------------------------------------------------------------------------<br>
## DEPLOY ULANG === LANGKAH ADC<br>
----------------------------------------------------------------------------------<br><br>

`gcloud init --no-launch-browser`<br>
`gcloud auth application-default login --no-launch-browser`<br>

### cek permission di wsl usah terhubung belum sm projectnya<br>
`gcloud config get-value project`<br>

`cd .`<br>
`gcloud run deploy --source . --port 3000`<br>

----- buka cloud shell terminal -----<br><br>
`cd asclepius`<br>
`ls`<br>
`clear`<br>
`gcloud app deploy`<br>
