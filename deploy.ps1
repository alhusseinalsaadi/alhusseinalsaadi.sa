param([string]$msg = "update site")

Write-Host "Pushing to GitHub..." -ForegroundColor Cyan
gh auth switch --user alhusseinalsaadi | Out-Null
git add .
git commit -m $msg
git push render master

Write-Host "Deploying to EC2..." -ForegroundColor Cyan
$cmd = @"
cd alhusseinalsaadi.sa && git pull && docker build -t legal-site . && docker stop legal-site; docker rm legal-site; docker run -d --name legal-site --restart always -p 3000:3000 -v /data:/data --env-file .env.production legal-site && echo 'Deploy done!'
"@

ssh -i "C:\Users\DTG\legal-site\key.pem" ubuntu@16.171.113.27 $cmd
gh auth switch --user mustafabushra | Out-Null
Write-Host "Done! https://alhusseinalsaadi.sa" -ForegroundColor Green
