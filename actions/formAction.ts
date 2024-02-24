'use server'

import { DBManager } from "@azrico/nodeserver";

export const submitRequest = async (formData: FormData) => {
    
    const fullname = formData.get('fullname');
    const email = formData.get('email');
    const desc = formData.get('desc');
    /* ------------------------------ insert to db ------------------------------ */
    await DBManager.tryToConnect();
    const result = await DBManager.handle_update(
        'user_requests',
        undefined,
        {
            fullname,
            email,
            desc,
        },
        { noindex: true }
    );
    //need to refresh....

    console.log(fullname, email, desc, result);
}