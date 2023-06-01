import { json } from '@sveltejs/kit'
import Student from '../../../db/models/Student.model.js'

export async function POST({request}){
    const { studentId }= await request.json()
    try{
        const student = await Student.aggregate().match({
            "_id": studentId
        }).lookup({
            from: 'documents',
            let: { author: "$_id" },
            pipeline: [
                {
                    $match: {
                        $expr: {
                            $and: [
                                { $eq: [ "$$author", { "$toObjectId": "$studentId" } ] }
                            ]
                        }
                    }
                }
            ],
            as: 'documents'
        })
        
        return json({
            ok: true,
            message: "Este es tu estudiante",
            data: student
        })
    } catch(error){
        return json({
            ok: false,
            message: "Upps hubo algun error!!",
            error
        })
    }
}