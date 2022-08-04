import * as bodyParser from "body-parser";
import * as express from "express";
import { APILogger } from "./logger/api.logger";
import { NetworkController } from "./controller/network.controller";
import * as swaggerUi from 'swagger-ui-express';
import * as fs from 'fs';
import 'dotenv/config'
import { PackageController } from "./controller/package.controller";
import { ShowController } from "./controller/show.controller";

class App {

    public express: express.Application;
    public logger: APILogger;
    public networkController: NetworkController;
    public packageController: PackageController;
    public showController: ShowController;

    /* Swagger files start */
    private swaggerFile: any = (process.cwd()+"/swagger/swagger.json");
    private swaggerData: any = fs.readFileSync(this.swaggerFile, 'utf8');
    private customCss: any = fs.readFileSync((process.cwd()+"/swagger/swagger.css"), 'utf8');
    private swaggerDocument = JSON.parse(this.swaggerData);
    /* Swagger files end */


    constructor() {
        this.express = express();
        this.middleware();
        this.routes();
        this.logger = new APILogger();
        this.networkController = new NetworkController();
        this.packageController = new PackageController();
        this.showController = new ShowController();
    }

    // Configure Express middleware.
    private middleware(): void {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    }

    private routes(): void {

        this.express.get('/api/networks', (req, res) => {
            this.networkController.getNetworks().then(data => res.json(data));
        });

        this.express.post('/api/network', (req, res) => {
            console.log(req.body);
            this.networkController.createNetwork(req.body.network).then(data => res.json(data));
        });
        
        this.express.put('/api/network', (req, res) => {
            this.networkController.updateNetwork(req.body.network).then(data => res.json(data));
        });
        
        this.express.delete('/api/network/:id', (req, res) => {
            this.networkController.deleteNetwork(req.params.id).then(data => res.json(data));
        });



        this.express.get('/api/packages/:id', (req, res) => {
            if (req.params.id) {
                this.packageController.getPackageById(req.params.id).then(data => res.json(data));
            }else {
                this.packageController.getPackages().then(data => res.json(data));
            }
        });

        this.express.get('/api/packages', (req, res) => {
            
                this.packageController.getPackages().then(data => res.json(data));
        });
        
        this.express.post('/api/package', (req, res) => {
            console.log(req.body);
            this.packageController.createPackage(req.body.package).then(data => res.json(data));
        });
        
        this.express.put('/api/package', (req, res) => {
            this.packageController.updatePackage(req.body.package).then(data => res.json(data));
        });

        this.express.get('/api/package/:id', (req, res) => {
            
        });
        
        this.express.delete('/api/package/:id', (req, res) => {
            this.packageController.deletePackage(req.params.id).then(data => res.json(data));
        });


        this.express.get('/api/shows', (req, res) => {
            if (req.query.network_id) {
                this.showController.getShowsByNetworkId(req.query.network_id).then(data => res.json(data));
            }
            else  if (req.query.package_id) {
                this.showController.getShowsByPackageId(req.query.package_id).then(data => res.json(data));
            }
            else {
                this.showController.getShows().then(data => res.json(data));
            }
        });

        this.express.post('/api/show', (req, res) => {
            console.log(req.body);
            this.showController.createShow(req.body.show).then(data => res.json(data));
        });
        
        this.express.put('/api/show', (req, res) => {
            this.showController.updateShow(req.body.show).then(data => res.json(data));
        });
        
        this.express.delete('/api/show/:id', (req, res) => {
            this.showController.deleteShow(req.params.id).then(data => res.json(data));
        });




        this.express.get("/", (req, res, next) => {
            res.send("Typescript App works!!");
        });

        // swagger docs
        this.express.use('/api/docs', swaggerUi.serve,
            swaggerUi.setup(this.swaggerDocument, null, null, this.customCss));

        // handle undefined routes
        this.express.use("*", (req, res, next) => {
            res.send("Make sure url is correct!!!");
        });
    }
}

export default new App().express;