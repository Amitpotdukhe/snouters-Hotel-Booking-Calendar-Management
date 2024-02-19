// logger.js
import { createLogger, format, transports } from 'winston';
const { combine, timestamp, printf } = format;

// Define the log format
const logFormat = printf(({ level, message, timestamp }) => {
    return `${timestamp} [${level.toUpperCase()}]: ${message}`;
});

// Create the logger
const logger = createLogger({
    format: combine(timestamp(), logFormat),
    transports: [
        new transports.Console(), // Log to console
        new transports.File({ filename: 'error.log', level: 'error' }), // Log errors to a file
        new transports.File({ filename: 'combined.log' }), // Log all levels to another file
    ],
});

export default logger;
