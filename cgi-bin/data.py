#! /usr/bin/env python3

import cgi
form = cgi.FieldStorage()
function='init'
params=False

if form.length > 0:
    if 'function_name' in form:
        function=form['function_name'].value
    if 'params' in form:
        params=form['params'].value

class SimpleWebPython:

    def init(self):
        return 'hello From Python'

    def getData(self, myparams):
         return 'hello From Python Function getData,<br>you sent these params<br>{}'.format(myparams)

my_object = SimpleWebPython()
call_function_byname = getattr(SimpleWebPython, function)
print('Content-type: text/html')
print()
if params:
    print(call_function_byname(None, params))
else:
    print(call_function_byname(None))
