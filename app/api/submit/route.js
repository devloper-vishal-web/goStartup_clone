import  {connectDB } from '@/lib/mongodb'; 
import clientPromise from '@/lib/mongodb';  
import { Form } from '@/models/Form';

export async function POST(request) {
    try {
        const body = await request.json();
        await connectDB();
        const newEntry = await Form.create(body);

        return Response.json({message: 'Form Submitted',
            data: newEntry},
        {status:201})
    } catch (error) {
        return Response.json({message: 'Failed to submit form'},
        {status:201})
    }
}