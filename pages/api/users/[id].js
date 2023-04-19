export default function userIdHandler(req, res) {
    const { id } = req.query;
    const { name } = req.body;
    const { method } = req;

    switch(method) {
        case 'GET':
            res.status(200).json({ message: `TODO: Get User With ID: ${id}` });
        break;

        case 'PUT':
            res.status(200).json({ message: `TODO: Update User with ID: ${id} name value to: ${name}` });
        break;

        case 'DELETE':
            res.status(200).json({ message: `TODO: Delete User With User ID: ${id}` });
        break;

        default:
            res.setHeader('Allow', ['GET', 'POST', 'DELETE']);
            res.status(405).end(`Method ${method} Not Allowed`);
        break;
    }
}