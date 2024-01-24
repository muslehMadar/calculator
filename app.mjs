import express from 'express';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path'
import Article from './models/Article.mjs';
import mongoose from 'mongoose'
const app = express();
const port = 4242;

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

/*mongoose
	.connect(
		"mongodb+srv://malmadar36:musleh36@myfirstdatabase.8efurkp.mongodb.net/?retryWrites=true&w=majority"
	)
	.then(() => {
		console.log("connected successfully");
	})
	.catch((error) => {
		console.log("error with connecting with the DB ", error);
	});*/

app.get('/calculator', async (req, res) => {
    const indexPath = path.join(__dirname, 'views', 'calculator.html');
    res.sendFile(indexPath);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
