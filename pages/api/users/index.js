export default function userHandler(req, res) {
    const { name } = req.body;
    const { method } = req;

    switch(method) {
        case 'GET':
            res.status(200).json({ message: `TODO: Get All Users`});
            break;

        case 'POST':
            res.status(200).json({ message: `TODO: Create User With Name: ${name}` });
            break;

        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
            break;
    }
}