var name = prompt('Input name','');
var position = prompt('Input position','');
var phone = prompt('Input phone', '');
var visitcard = ' <TABLE width="100%" border="0">'
+' <TR>'
+' <TD align="CENTER" valign="CENTER">'
+' <IMG src="1.jpg" width="100">'
+' </TD>'
+' <TD align="CENTER">'
+' <B>' + name + '</B><BR>'
+' <I>' + position + '</I><BR>'
+' <FONT color="blue">' + phone + '</FONT>'
+' </TD>'
+' </TR>'
    + ' </TABLE>';
document.write('<TABLE width="100%" border="0" align="CENTER">');
for(var y=0; y<12; y++)
{
document.write('<TR>');
for(var x=0; x<3; x++)
{
document.write( '<TD align="CENTER" style="border-style: dashed; border-width:thin;">');
document.write( visitcard );
document.write('</TD>');
}
document.write('</TR>');
}
document.write('</TABLE>');