import boto3
import zipfile
import StringIO
import mimetypes

def lambda_handler(event, context):

    s3 = boto3.resource('s3')
    
    portfolio_bucket = s3.Bucket('sean-portfolio-tutorial-bucket')
    build_bucket = s3.Bucket('sean-portfolio-tutorial-build-bucket')
    
    portfolio_zip = StringIO.StringIO()
    build_bucket.download_fileobj('portfolioBuild.zip', portfolio_zip)
    
    with zipfile.ZipFile(portfolio_zip) as myzip:
        for nm in myzip.namelist():
            obj = myzip.open(nm)
            portfolio_bucket.upload_fileobj(obj, nm)
            ExtraArgs={'ContentType': mimetypes.guess_type(nm)[0]}
            portfolio_bucket.Object(nm).Acl().put(ACL='public-read')
            

    return 'Hello from Lambda'