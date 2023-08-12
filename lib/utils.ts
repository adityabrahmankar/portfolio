import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import Airtable from 'airtable';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}


// Airtable.configure({
//   apiKey: process.env.AIRTABLE_API_KEY as string,
// });

// const base = Airtable.base(process.env.AIRTABLE_BASE_ID  as string);

// const table = base(process.env.AIRTABLE_TABLE_NAME as string );

// export { table };