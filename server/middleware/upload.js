import multer from "multer";
import fs from "fs";
import path from "path";

const createDirectory = (folder) => {

    const directory = path.join("uploads", folder);

    if (!fs.existsSync(directory)) {

        fs.mkdirSync(directory, {

            recursive: true,

        });

    }

    return directory;

};

const storage = multer.diskStorage({

    destination: (req, file, cb) => {

        let folder = "temp";

        if (req.baseUrl.includes("assets")) {

            folder = "assets";

        }

        else if (req.baseUrl.includes("maintenance")) {

            folder = "maintenance";

        }

        else if (req.baseUrl.includes("employees")) {

            folder = "employees";

        }

        else if (req.baseUrl.includes("audits")) {

            folder = "audits";

        }

        else if (req.baseUrl.includes("reports")) {

            folder = "reports";

        }

        cb(

            null,

            createDirectory(folder)

        );

    },

    filename: (req, file, cb) => {

        const extension = path.extname(file.originalname);

        const fileName =

            Date.now() +

            "-" +

            Math.round(Math.random() * 1e9) +

            extension;

        cb(null, fileName);

    },

});

const fileFilter = (req, file, cb) => {

    const allowed = [

        "image/jpeg",

        "image/png",

        "image/jpg",

        "image/webp",

        "application/pdf",

    ];

    if (

        allowed.includes(file.mimetype)

    ) {

        cb(null, true);

    }

    else {

        cb(

            new Error(

                "Unsupported file type."

            ),

            false

        );

    }

};

const upload = multer({

    storage,

    fileFilter,

    limits: {

        fileSize:

            Number(process.env.MAX_FILE_SIZE) ||

            10 * 1024 * 1024,

    },

});

export default upload;