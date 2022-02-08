@echo off

rem The root directory of the Angular project
set SOURCE_DIR=
rem The directory where the static files are deployed by the Angular build
set	DEPLOYMENT_ARTEFACT_DIR=
rem The name of the AWS S3 bucket to which the artifects need to be deployed
set DEPLOYMENT_BUCKET=



echo. 
echo ---------------------------------------------------------
echo BUILDING PROJECT ...
echo ---------------------------------------------------------


cd %SOURCE_DIR%
rem ng test
call ng build


echo.
echo ---------------------------------------------------------
echo DEPLOYING TO AWS...
echo ---------------------------------------------------------
echo.
echo Removing existing bucket contents ...
echo.
aws s3 rm s3://%DEPLOYMENT_BUCKET% --recursive

echo.
echo Uploading artefacts ...
echo.

cd %DEPLOYMENT_ARTEFACT_DIR%
for /F %%i IN ('dir /b *') DO (
	echo Uploading %%i
	aws s3api put-object --bucket %DEPLOYMENT_BUCKET% --key %%i --body %%i
)

echo Deployment process completed successfully
echo.

pause