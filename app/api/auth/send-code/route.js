import {backend} from '../../../../lib/server/vercel-backend';
import {checkOrigin,json,fail,problem} from '../../../../lib/server/review-runtime';
export async function POST(request){try{checkOrigin(request);const {email}=await request.json();if(typeof email!=='string'||email.length>254||!/^\S+@\S+\.\S+$/.test(email))throw problem('Enter a valid email address.',400);await backend('/auth/v1/otp',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({email,create_user:true})});return json({message:'Check your email for your sign-in code.'})}catch(e){return fail(e)}}
