# EmailJS Setup Guide

Follow these steps to enable email functionality on your contact form:

## Step 1: Create EmailJS Account

1. Go to [https://www.emailjs.com/](https://www.emailjs.com/)
2. Click "Sign Up" and create a free account
3. Verify your email address

## Step 2: Add Email Service

1. In the EmailJS dashboard, go to **Email Services**
2. Click **Add New Service**
3. Choose **Gmail** (or your preferred email provider)
4. Click **Connect Account** and authorize with your Gmail (anas31ahmed03@gmail.com)
5. Note the **Service ID** (something like "service_xxxxxxx")

## Step 3: Create Email Template

1. Go to **Email Templates**
2. Click **Create New Template**
3. Set up your template with these variables:
   ```
   Subject: New Contact Form Message from {{from_name}}
   
   From: {{from_name}}
   Email: {{from_email}}
   
   Message:
   {{message}}
   ```
4. Note the **Template ID** (something like "template_xxxxxxx")

## Step 4: Get Public Key

1. Go to **Account** → **General**
2. Find your **Public Key** (looks like a long string)

## Step 5: Update Your Code

Open `src/components/Contact.jsx` and replace these lines (around line 24-26):

```javascript
const serviceId = 'YOUR_SERVICE_ID'      // Replace with your Service ID
const templateId = 'YOUR_TEMPLATE_ID'    // Replace with your Template ID  
const publicKey = 'YOUR_PUBLIC_KEY'      // Replace with your Public Key
```

## Example:

```javascript
const serviceId = 'service_abc123'
const templateId = 'template_xyz789'
const publicKey = 'Xy9ZaBcDeFgHiJkLm'
```

## Step 6: Test

1. Save the file
2. Fill out your contact form
3. Check your email (anas31ahmed03@gmail.com) for the message!

## Free Tier Limits

- 200 emails per month
- Perfect for a portfolio website

## Troubleshooting

If emails aren't sending:
- Check browser console for errors
- Verify all IDs and keys are correct
- Make sure you authorized Gmail access
- Check EmailJS dashboard for error logs

---

**Note:** Keep your keys in the code for now. For production, consider using environment variables for better security.
