
const folder = process.cwd() + '/data/videos/'; 
const moment = require('moment');
const fs = require('fs');


const Storage = require('@google-cloud/storage');
const storage = new Storage();
const bucket = storage.bucket('wengyuli.appspot.com');

// const acl_option = {
//     entity: 'allUsers',
//     role: storage.acl.READER_ROLE
// };
// bucket.acl.add(acl_option, function(err, aclObject) {});
 
console.log('start detect files...');

fs.readdir(folder, (err, files) => {
    
    console.log(files);
    
    files.forEach(file => {
        
        console.log('start uploading ', file);
        const filename = moment().format('YYYYMMDDHmmssS') + file;
        bucket.upload(folder + file, { destination: filename  }).then(results => {
            
            console.log(results);

            // fs.unlink(folder + file);

            console.log(`${file} uploaded.`);

            const gfile = bucket.file(filename);

            gfile.makePrivate().then(function(data) { });

            const options = {
                action: 'read',
                expires: '06-17-2018',
                // contentType: 'video/mp4'
            };  
            gfile.getSignedUrl(options).then(results => {
                const url = results[0];
                console.log(`The signed url for ${filename} is ${url}.`);
            });

        });

    }); 

});



