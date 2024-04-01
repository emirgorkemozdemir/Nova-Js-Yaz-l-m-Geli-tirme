var database_veri = "";
try
{
database_veri.get();
}
catch(err)
{
window.alert(err.message);
}
finally
{
database_veri="veritabanından veri alma denemesi bitti";
}