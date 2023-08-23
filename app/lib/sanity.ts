import {createClient, groq} from 'next-sanity'

const projectId ="3gvnuqaj"
const dataset =  "production"
const apiVersion =  "2023-08-23"

export const client = createClient({
    projectId,
    dataset,
    apiVersion, // https://www.sanity.io/docs/api-versioning
    useCdn: true, // if you're using ISR or only static generation at build time then you can set this to `false` to guarantee no stale content
})

