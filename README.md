Testing Unconventional Steganographic Methods for Data Concealment.  
  Note: No encryption, Histogram or LSB techniques were used for concealment.

The aim of these exercises is to determine whether future LLMs will be able to parse image data to detect anomalies or changes in byte order and structure to uncover concealed data. Currently AI is unable to solve random byte-order-manipulation.
This method is highly resistant to most steganalisys tools.
	
Most CTFs are over my head, but I still mess around with unconventional methods in Steganography because I find it so fascinating. It's hard for people to simply 'guess' what you've done and the insane levels of obfuscation you may have packed into a challenge. That could frustrate the heck out of a beginner who's really trying to learn the various techniques and approach being used. I've constructed a simple Stego example below with a link to the obfuscated file. Here is an example of a useful step-by-step guide including the spoiler:

Below is a link to an image of a famous celebrity within a plain blank PNG file which I put together in Notepad++
* (No LSB tools or algorithms used. Just dual Base64 layering and one byte manually altered in the file. If you change the byte to it's correct binary representation the image is restored.)

Steps:

Download image: https://pixeldrain.com/u/mMEj9XSG

View with an image viewer or simply in your browser

Open the image in an advanced text/code editor (I use Notepad++ )

Or use an online image to hex https://capitalizemytitle.com/image-to-hex-converter/

The image we need to extract has a hint in the file name indicating a 4-byte sequence: uzÄD

In UTF-8 these four bytes will appear as uz(xC4)D

In ANSI encoding they appear as uzÄD

In Hex they appear as 757AC444

On inspection we see that these four bytes in sequence are not found anywhere in the file.

Now encode the entire file to Base64

Search for the 2nd occurrence of the string iVBOR within the Base64.

Highlight all the characters starting at the 2nd occurrence of iVBOR all the way to the end of the file EXCEPT the last 21 characters.

Copy all the highlighted characters to a new page and highlight them all again. (you should see a total of 69742 Base64 characters)

Decode the entire string using Base64

Save as 'famous.png' and try open it. It's still blank!

On inspection we still don't find uzÄD (Hex 757AC444) anywhere in the file.

Let's drop the last byte in the search and look for uzÄ (Hex 757AC4)

Great we have a match. And we can see the forth byte is 'E'

So let's change that 'E' to 'D' as the hint in the filename suggests.

So our Hex will now look like: 757AC444

Now save the file as famous.png and open it.

There you go...who is our celebrity?















































































































































