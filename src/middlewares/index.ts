import { Request, Response } from 'express';
import { sendSuccessResponse } from '../util/response';

// Root Endpoint
export const baseRoute = (req: Request, res: Response) => sendSuccessResponse(res, 200, 'Okay');
