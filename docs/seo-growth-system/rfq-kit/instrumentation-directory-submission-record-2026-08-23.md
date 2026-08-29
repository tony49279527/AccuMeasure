# Instrumentation Directory Submission Record

**Date:** 2026-08-23 Asia/Shanghai  
**Channel:** Instrumentation Directory  
**Official form:** https://directory.instrumentation.co.uk/contact/  
**Requested package:** Bronze pricing inquiry, with Bronze/Silver terms requested in the message  
**Company:** AccuMeasure Instruments Co., Ltd.  
**Email used:** `info@accumeasuretech.com`

## Attempt result

- An authorized submission attempt was made through the official contact URL using the public company details and the prepared message.
- The server returned HTTP 200.
- The returned page displayed the official Formidable form error: the page was not loading JavaScript properly and the form could not submit.
- No success confirmation, reference number, email confirmation, or public listing URL was returned.
- The first raw HTTP attempt was not treated as a submission and was recorded as `submission-outcome-unknown`.

## Browser submission

- **Submitted:** 2026-08-23 12:32 CST
- The existing default browser session was used; no new account, file upload, payment, or CAPTCHA bypass was performed.
- The form was filled with the approved public company details, Bronze package selection, and the prepared pricing/eligibility inquiry.
- The page returned the official confirmation: `Thank you for your enquiry, one of our team will be in touch soon...`
- Final local status: `submitted`.
- No public company profile URL, pricing response, or package approval has been received yet.

## Safety decision

The raw HTTP route was not retried. The successful browser confirmation is sufficient to mark the inquiry `submitted`, but not sufficient to mark a listing `published` or to claim an external backlink.

## Next step

Wait for the directory's response. If they provide pricing or a profile review request, record the terms before accepting any package. If a public profile is later created, verify the company name, website, categories, address, contact route, and link destination before updating the status to `published`.
