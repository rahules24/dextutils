pip install -r requirements.txt
cd dexter-react
npm install
npm run build
cp -r build/* ../dexter-react/build/
python manage.py collectstatic
