!macro customInstall
   SetRegView 64
   WriteRegStr HKCR "*\shell\qiko" "" "open w&ith qiko"
   WriteRegStr HKCR "*\shell\qiko" "Icon" "$INSTDIR\qiko.exe"
   WriteRegStr HKCR "*\shell\qiko\command" "" '"$INSTDIR\qiko.exe" "search" "%1"'
   SetRegView 32
   WriteRegStr HKCR "*\shell\qiko" "" "open w&ith qiko"
   WriteRegStr HKCR "*\shell\qiko" "Icon" "$INSTDIR\qiko.exe"
   WriteRegStr HKCR "*\shell\qiko\command" "" '"$INSTDIR\qiko.exe" "search" "%1"'
!macroend
!macro customUninstall
   DeleteRegKey HKCR "*\shell\qiko"
!macroend