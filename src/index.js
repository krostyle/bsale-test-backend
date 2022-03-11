import app from './server/server';
app.listen(PORT, () => {
    console.log(`Server on port ${app.get("port")}`);
    console.log(`http://localhost:${app.get("port")}`);
});