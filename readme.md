We will use use query parameters. 
Every function is written to support only JSON file format.


Write Function API
http://localhost:3030/writeData
?rawData={wefwf: false} // data to write
&fileName=abc.json // file extension is required, if not given it will write in main.json

Get data Function API
localhost:3030/getData
?fileName=abc.json // file extension is required, if not given it will read main.json