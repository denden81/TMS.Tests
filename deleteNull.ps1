Get-ChildItem  -recurse | where-object {$_.length -eq 0} | Remove-Item