# How to bypass AVs?

When creating a payload with Deluminator, it generates two files: an executable file (.exe) and a raw Python code file. The raw Python code can be customized to bypass antivirus software by utilizing various techniques such as code encryption, code minification, and other tools that can change the signature of the code.

To modify the raw Python code, you can employ techniques like code encryptors and minifiers to obfuscate the code and make it harder for antivirus software to detect its malicious intent. By changing the code signature, you increase the chances of evading detection by antivirus systems.

Once the code customization is done, you can compile it using a tool like PyInstaller, which packages the Python code into a standalone executable file. This final executable file can be used as the payload for carrying out an attack.

By customizing the code and employing techniques to evade antivirus detection, you significantly enhance the effectiveness of the Deluminator payload.

## Resources
- [pyinstaller](https://pypi.org/project/pyinstaller/)  : compile payload into .exe
- [pythonminifier.com](https://python-minifier.com/) : to minify the payload source code.
- [pyobfuscate.com](https://pyobfuscate.com/) : to obfucate the payload source  code.