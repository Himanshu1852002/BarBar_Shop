import jwt from "jsonwebtoken";

const adminMiddleware = (req, res, next) => {
    const token = req.header("Authorization")?.replace("Bearer ", "");
    if (!token) return res.status(401).json({ message: "No token, auth denied" });

    try {
        const decoded = jwt.verify(token, "mysecretkey");
        req.admin = decoded; 
        next();
    } catch (err) {
        res.status(401).json({ message: "Invalid token" });
    }
};
export default adminMiddleware;