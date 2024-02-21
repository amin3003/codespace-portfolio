import { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
	message: string;
};

export const GET = async (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
	return Response.json({ hello: '1' });
};
