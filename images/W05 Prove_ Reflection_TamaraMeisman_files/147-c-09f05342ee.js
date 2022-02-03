(window["canvasWebpackJsonp"]=window["canvasWebpackJsonp"]||[]).push([[147],{"65NJ":function(e,t,s){"use strict"
var n=s("ouhR")
var r=s.n(n)
s("w2hD")
r.a.fn.scrollToVisible=function(e){const t={}
const s=r()(e)
if(0===s.length)return
let n=s.offset(),a=s.outerWidth(),i=s.outerHeight(),c=n.top,l=c+i,_=n.left,o=_+a,d="html,body"==this.selector?r.a.windowScrollTop():this.scrollTop(),u=this.scrollLeft(),f=this.outerHeight(),g=this.outerWidth()
if("html,body"!=this.selector){let e=r()("body").offset()
this.each((function(){try{e=r()(this).offset()
return false}catch(e){}}))
c-=e.top
l-=e.top
_-=e.left
o-=e.left}if("HTML"==this[0].tagName||"BODY"==this[0].tagName){f=r()(window).height()
r()("#wizard_box:visible").length>0&&(f-=r()("#wizard_box:visible").height())
g=r()(window).width()
c-=d
_-=u
l-=d
o-=u}c<0||f<i&&l>f?t.scrollTop=c+d:l>f&&(t.scrollTop=l+d-f+20)
_<0?t.scrollLeft=_+u:o>g&&(t.scrollLeft=o+u-g+20)
1==t.scrollTop&&(t.scrollTop=0)
1==t.scrollLeft&&(t.scrollLeft=0)
this.scrollTop(t.scrollTop)
this.scrollLeft(t.scrollLeft)
return this}},FZ6K:function(e,t,s){"use strict"
var n=s("An8g")
var r=s("VTBJ")
var a=s("q1tI")
var i=s.n(a)
s("17x9")
var c=s("bZJi")
var l=s("YKS3")
function _(e){return i.a.createElement("a",Object.assign({rel:"noopener noreferrer",target:"_blank"},e),l["a"].t("SpeedGrader™"))}function o(e){const t=e.className?"icon-speed-grader "+e.className:"icon-speed-grader"
let s={className:t,href:e.href}
e.disabled&&(s=Object(r["a"])(Object(r["a"])({},s),{},{"aria-disabled":"true","aria-describedby":e.disabledTip,onClick:e=>{e.preventDefault()},role:"button",style:{opacity:.5}}))
return e.disabled?Object(n["a"])(c["a"],{placement:"bottom",tip:e.disabledTip,variant:"inverse"},void 0,_(s)):_(s)}t["a"]=o},YKS3:function(e,t,s){"use strict"
var n=s("HGxv")
var r=s("8WeW")
Object(r["a"])(JSON.parse('{"ar":{"must_select_a_student_group_first_15c6a3cb":"يجب تحديد مجموعة طلاب أولاً","remove_selected_attachment_61f81ee4":"إزالة المرفق المحدد","select_group_to_grade_6df28d80":"حدد مجموعة للدرجة","select_one_8e0af564":"حدد واحدًا","speedgrader_tm_44688790":"SpeedGrader™"},"ca":{"must_select_a_student_group_first_15c6a3cb":"Primer s\'ha de seleccionar un grup d\'estudiants","remove_selected_attachment_61f81ee4":"Suprimeix el fitxer adjunt seleccionat","select_group_to_grade_6df28d80":"Selecciona el grup per qualificar","select_one_8e0af564":"Seleccioneu-ne un","speedgrader_tm_44688790":"SpeedGrader™"},"cy":{"must_select_a_student_group_first_15c6a3cb":"Rhaid dewis grŵp myfyrwyr i ddechrau","remove_selected_attachment_61f81ee4":"Tynnu\'r atodiad dan sylw","select_group_to_grade_6df28d80":"Dewis Grŵp i\'w Raddio","select_one_8e0af564":"Dewiswch Un","speedgrader_tm_44688790":"SpeedGrader™"},"da":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en studiegruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal have karakter","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"da-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Skal vælge en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgte vedhæftede fil","select_group_to_grade_6df28d80":"Vælg gruppe, der skal vurderes","select_one_8e0af564":"Vælg en","speedgrader_tm_44688790":"SpeedGrader"},"de":{"must_select_a_student_group_first_15c6a3cb":"Zuerst muss eine Studentengruppe ausgewählt werden","remove_selected_attachment_61f81ee4":"Entfernen des ausgewählten Anhangs","select_group_to_grade_6df28d80":"Zu benotende Gruppe auswählen","select_one_8e0af564":"Einen auswählen","speedgrader_tm_44688790":"SpeedGrader™"},"el":{"select_one_8e0af564":"Επιλέξτε Ένα","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-AU-x-unimelb":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-CA":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select One","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"en-GB-x-ukhe":{"must_select_a_student_group_first_15c6a3cb":"Must select a student group first","remove_selected_attachment_61f81ee4":"Remove selected attachment","select_group_to_grade_6df28d80":"Select Group to Grade","select_one_8e0af564":"Select one","speedgrader_tm_44688790":"SpeedGrader™"},"es":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de estudiantes","remove_selected_attachment_61f81ee4":"Eliminar adjunto seleccionado","select_group_to_grade_6df28d80":"Seleccionar grupo para calificar","select_one_8e0af564":"Seleccionar uno","speedgrader_tm_44688790":"SpeedGrader™"},"es-ES":{"must_select_a_student_group_first_15c6a3cb":"Primero debe seleccionar un grupo de alumnos","remove_selected_attachment_61f81ee4":"Eliminar archivo adjunto seleccionado","select_group_to_grade_6df28d80":"Seleccionar grupo para evaluar","select_one_8e0af564":"Seleccionar uno","speedgrader_tm_44688790":"SpeedGrader™"},"fa":{"must_select_a_student_group_first_15c6a3cb":"ابتدا باید یک گروه دانشجویی را انتخاب کنید","select_group_to_grade_6df28d80":"انتخاب گروه برای نمره","select_one_8e0af564":"انتخاب یک مورد","speedgrader_tm_44688790":"برنامه نمره گذاری سریع™"},"fi":{"must_select_a_student_group_first_15c6a3cb":"Täytyy valita ensin opiskelijaryhmä","remove_selected_attachment_61f81ee4":"Poista valittu liite","select_group_to_grade_6df28d80":"Valitse arvioitava ryhmä","select_one_8e0af564":"Valitse yksi","speedgrader_tm_44688790":"SpeedGrader™"},"fr":{"must_select_a_student_group_first_15c6a3cb":"Il faut d\'abord sélectionner un groupe d\'élèves","remove_selected_attachment_61f81ee4":"Supprimer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionnez un groupe à noter","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"fr-CA":{"must_select_a_student_group_first_15c6a3cb":"Vous devez d\'abord sélectionner un groupe d\'étudiants","remove_selected_attachment_61f81ee4":"Retirer la pièce jointe sélectionnée","select_group_to_grade_6df28d80":"Sélectionner le groupe à classer","select_one_8e0af564":"Sélectionner un élément","speedgrader_tm_44688790":"SpeedGrader™"},"he":{"select_one_8e0af564":"בחר אחת האפשרויות","speedgrader_tm_44688790":"SpeedGrader™"},"ht":{"must_select_a_student_group_first_15c6a3cb":"Dwe dabò seleksyone yon gwoup elèv","remove_selected_attachment_61f81ee4":"Elimine atachman seleksyone a","select_group_to_grade_6df28d80":"Seleksyone Gwoup pou Evalye a","select_one_8e0af564":"Seleksyone Yonn","speedgrader_tm_44688790":"SpeedGrader™"},"hu":{"select_one_8e0af564":"Válasszon egyet","speedgrader_tm_44688790":"Gyorsértékelő"},"hy":{"select_one_8e0af564":"Ընտրել մեկը","speedgrader_tm_44688790":"«Արագ գնահատման համակարգ™»"},"is":{"must_select_a_student_group_first_15c6a3cb":"Velja þarf nemendahóp fyrst","remove_selected_attachment_61f81ee4":"Fjarlægja valið viðhengi","select_group_to_grade_6df28d80":"Veldu hóp til að gefa einkunnir","select_one_8e0af564":"Velja einn","speedgrader_tm_44688790":"SpeedGrader™"},"it":{"must_select_a_student_group_first_15c6a3cb":"È necessario selezionare prima un gruppo di studenti","remove_selected_attachment_61f81ee4":"Rimuovi allegato selezionato","select_group_to_grade_6df28d80":"Seleziona gruppo a cui assegnare un voto","select_one_8e0af564":"Scegli un\'opzione","speedgrader_tm_44688790":"SpeedGrader™"},"ja":{"must_select_a_student_group_first_15c6a3cb":"受講生グループを先に選択してください","remove_selected_attachment_61f81ee4":"選択された添付書類を削除","select_group_to_grade_6df28d80":"採点するグループを選択する","select_one_8e0af564":"1 つを選択","speedgrader_tm_44688790":"SpeedGrader™"},"ko":{"select_one_8e0af564":"하나 선택","speedgrader_tm_44688790":"SpeedGrader™"},"mi":{"must_select_a_student_group_first_15c6a3cb":"Me tīpakohia te ākonga rōpu i te tuatahi","remove_selected_attachment_61f81ee4":"Tangohia tē tāpiri kua tīpakohia","select_group_to_grade_6df28d80":"Tīpako Rōpu ki te Kōeke","select_one_8e0af564":"Tīpakohia","speedgrader_tm_44688790":"Speedgrader"},"nb":{"must_select_a_student_group_first_15c6a3cb":"Velg en studentgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for vurdering","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nb-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Velg en elevgruppe først","remove_selected_attachment_61f81ee4":"Fjern valgt vedlegg","select_group_to_grade_6df28d80":"Velg gruppe for vurdering","select_one_8e0af564":"Velg én","speedgrader_tm_44688790":"SpeedGrader™"},"nl":{"must_select_a_student_group_first_15c6a3cb":"Moet eerst een cursistengroep selecteren","remove_selected_attachment_61f81ee4":"Geselecteerde bijlage verwijderen","select_group_to_grade_6df28d80":"Groep selecteren voor beoordeling","select_one_8e0af564":"Eén selecteren","speedgrader_tm_44688790":"SpeedGrader™"},"nn":{"must_select_a_student_group_first_15c6a3cb":"Må først velje ei studentgruppe","select_group_to_grade_6df28d80":"Vel gruppe å vurdere","select_one_8e0af564":"Vel ein","speedgrader_tm_44688790":"SpeedGrader™"},"pl":{"must_select_a_student_group_first_15c6a3cb":"Należy najpierw wybrać grupę uczestników","remove_selected_attachment_61f81ee4":"Usuń wybrany załącznik","select_group_to_grade_6df28d80":"Wybierz grupę do oceny","select_one_8e0af564":"Wybierz jeden","speedgrader_tm_44688790":"SpeedGrader™"},"pt":{"must_select_a_student_group_first_15c6a3cb":"É necessário selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Retirar o anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para nota","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"pt-BR":{"must_select_a_student_group_first_15c6a3cb":"Deve selecionar um grupo de alunos primeiro","remove_selected_attachment_61f81ee4":"Remover anexo selecionado","select_group_to_grade_6df28d80":"Selecionar grupo para avaliar","select_one_8e0af564":"Selecionar um","speedgrader_tm_44688790":"SpeedGrader™"},"ru":{"must_select_a_student_group_first_15c6a3cb":"Сначала необходимо выбрать группу студентов","remove_selected_attachment_61f81ee4":"Удалить выбранное вложение","select_group_to_grade_6df28d80":"Выберите группу для оценки","select_one_8e0af564":"Выберите один","speedgrader_tm_44688790":"SpeedGrader™"},"sl":{"must_select_a_student_group_first_15c6a3cb":"Najprej je treba izbrati skupino študentov","remove_selected_attachment_61f81ee4":"Odstrani izbrano prilogo","select_group_to_grade_6df28d80":"Izberite skupino za ocenjevanje","select_one_8e0af564":"Izberi eno","speedgrader_tm_44688790":"SpeedGrader™"},"sv":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en studentgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"sv-x-k12":{"must_select_a_student_group_first_15c6a3cb":"Du måste först välja en elevgrupp","remove_selected_attachment_61f81ee4":"Ta bort valda bilagor","select_group_to_grade_6df28d80":"Välj en grupp som ska bedömas","select_one_8e0af564":"Välj en","speedgrader_tm_44688790":"SpeedGrader™"},"th":{"must_select_a_student_group_first_15c6a3cb":"จะต้องเลือกกลุ่มผู้เรียนก่อน","remove_selected_attachment_61f81ee4":"ลบเอกสารแนบที่เลือก","select_group_to_grade_6df28d80":"เลือกกลุ่มที่จะให้เกรด","select_one_8e0af564":"เลือกหนึ่งรายการ","speedgrader_tm_44688790":"SpeedGrader™"},"tr":{"select_one_8e0af564":"Birini Seçiniz","speedgrader_tm_44688790":"SpeedGrader™"},"uk":{"select_one_8e0af564":"Вибрати один","speedgrader_tm_44688790":"SpeedGrader™"},"zh-Hans":{"must_select_a_student_group_first_15c6a3cb":"必须先选择一个学生组","remove_selected_attachment_61f81ee4":"删除所选附件","select_group_to_grade_6df28d80":"选择要评分的组","select_one_8e0af564":"选择一个","speedgrader_tm_44688790":"快速评分器™"},"zh-Hant":{"must_select_a_student_group_first_15c6a3cb":"必須先選擇學生群組","remove_selected_attachment_61f81ee4":"移除所選的附件","select_group_to_grade_6df28d80":"選擇要評分的群組","select_one_8e0af564":"選擇一個","speedgrader_tm_44688790":"SpeedGrader™"}}'))
s("jQeR")
s("0sPK")
t["a"]=n["default"].scoped("assignment")},aq8L:function(e,t,s){"use strict"
var n=s("HGxv")
var r=s("8WeW")
Object(r["a"])(JSON.parse('{"ar":{"buttons":{"cancel":"إلغاء","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"هل ترغب بالتأكيد في حذف هذا؟"}}},"ca":{"buttons":{"cancel":"Cancel·la","delete":"Suprimeix"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Segur que ho voleu suprimir?"}}},"cy":{"buttons":{"cancel":"Canslo","delete":"Dileu"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ydych chi’n siŵr eich bod am ddileu hyn?"}}},"da":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"da-x-k12":{"buttons":{"cancel":"Annullér","delete":"Slet"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på, at du vil slette dette?"}}},"de":{"buttons":{"cancel":"Abbrechen","delete":"Löschen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Möchten Sie dies wirklich löschen?"}}},"el":{"buttons":{"cancel":"Ακύρωση","delete":"Διαγραφή"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Είστε σίγουρος/η ότι επιθυμείτε να το διαγράψετε;"}}},"en-AU":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-AU-x-unimelb":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-CA":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"en-GB-x-lbs":{"buttons":{"cancel":"Cancel","delete":"Delete"}},"en-GB-x-ukhe":{"buttons":{"cancel":"Cancel","delete":"Delete"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Are you sure you want to delete this?"}}},"es":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Seguro que desea eliminarlo?"}}},"es-ES":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"¿Está seguro que desea eliminarlo?"}}},"fa":{"buttons":{"cancel":"لغو","delete":"حذف"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"مطمئنید که می خواهید این مورد حذف شود؟"}}},"fi":{"buttons":{"cancel":"Peruuta","delete":"Poista"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Haluatko varmasti poistaa tämän?"}}},"fr":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément ?"}}},"fr-CA":{"buttons":{"cancel":"Annuler","delete":"Supprimer"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Voulez-vous vraiment supprimer cet élément?"}}},"he":{"buttons":{"cancel":"ביטול","delete":"ביטול"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"בטוח/ה שרוצה לבטל זאת?"}}},"ht":{"buttons":{"cancel":"Anile","delete":"Efase"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ou kwè vrèman ou vle efase sa a?"}}},"hu":{"buttons":{"cancel":"Mégse","delete":"Törlés"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Biztos benne, hogy törli ezt?"}}},"hy":{"buttons":{"cancel":"Չեղյալ համարել","delete":"Ջնջել"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Դուք իսկապե՞ս ցանկանում եք ջնջել սա:"}}},"is":{"buttons":{"cancel":"Hætta við","delete":"Eyða"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Viltu örugglega eyða þessu?"}}},"it":{"buttons":{"cancel":"Annulla","delete":"Elimina"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vuoi eliminare questo?"}}},"ja":{"buttons":{"cancel":"キャンセル","delete":"削除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"これを削除してもよろしいですか?"}}},"ko":{"buttons":{"cancel":"취소","delete":"삭제"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"삭제하시겠습니까?"}}},"mi":{"buttons":{"cancel":"Whakakore","delete":"Muku"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"E tino hiahia ana koe ki te muku i tēnei?"}}},"nb":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nb-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du ønsker å slette dette?"}}},"nl":{"buttons":{"cancel":"Annuleren","delete":"Verwijderen"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Weet je zeker dat je dit wilt verwijderen?"}}},"nn":{"buttons":{"cancel":"Avbryt","delete":"Slett"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Er du sikker på at du vil slette dette?"}}},"pl":{"buttons":{"cancel":"Anuluj","delete":"Usuń"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Czy na pewno chcesz usunąć ten element?"}}},"pt":{"buttons":{"cancel":"Cancelar","delete":"Eliminar"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza de que deseja excluir isto?"}}},"pt-BR":{"buttons":{"cancel":"Cancelar","delete":"Excluir"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Tem certeza que deseja excluir isto?"}}},"ru":{"buttons":{"cancel":"Отменить","delete":"Удалить"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Действительно хотите удалить?"}}},"sl":{"buttons":{"cancel":"Prekliči","delete":"Odstrani"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ali ste prepričani, da želite to izbrisati?"}}},"sv":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"sv-x-k12":{"buttons":{"cancel":"Avbryt","delete":"Ta bort"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Vill du verkligen radera det här?"}}},"th":{"buttons":{"cancel":"ยกเลิก","delete":"ลบ"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"แน่ใจว่าต้องการลบหรือไม่"}}},"tr":{"buttons":{"cancel":"İptal","delete":"Sil"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Bunu silmek istediğinize emin misiniz?"}}},"uk":{"buttons":{"cancel":"Скасувати","delete":"Видалити"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"Ви впевнені, що хочете це видалити?"}}},"zh-Hans":{"buttons":{"cancel":"取消","delete":"删除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"是否确定要删除它?"}}},"zh-Hant":{"buttons":{"cancel":"取消","delete":"刪除"},"instructure_misc_plugins":{"confirms":{"default_delete_thing":"您是否確定要刪除？"}}}}'))
s("jQeR")
s("0sPK")
var a=n["default"].scoped("instructure_misc_plugins")
var i=s("ouhR")
var c=s.n(i)
var l=s("gI0r")
var _=s("3PZ/")
s("dhbk")
s("ESjL")
s("65NJ")
s("w2hD")
c.a.fn.setOptions=function(e,t){let s=e?"<option value=''>"+Object(l["a"])(e)+"</option>":""
null==t&&(t=[])
t.forEach(e=>{const t=Object(l["a"])(e)
s+='<option value="'+t+'">'+t+"</option>"})
return this.html(c.a.raw(s))}
c.a.fn.ifExists=function(e){this.length&&e.call(this,this)
return this}
c.a.fn.scrollbarWidth=function(){const e=c()('<div style="width:50px;height:50px;overflow:hidden;position:absolute;top:-200px;left:-200px;"><div style="height:100px;"></div>').appendTo(this),t=e.find("div")
const s=t.innerWidth()
e.css("overflow-y","scroll")
const n=t.innerWidth()
e.remove()
return s-n}
c.a.fn.dim=function(e){return this.animate({opacity:.4},e)}
c.a.fn.undim=function(e){return this.animate({opacity:1},e)}
c.a.fn.confirmDelete=function(e){e=c.a.extend({},c.a.fn.confirmDelete.defaults,e)
const t=this
let s=null
let n=true
e.noMessage=e.noMessage||e.no_message
const r=function(){if(!n){e.cancelled&&c.a.isFunction(e.cancelled)&&e.cancelled.call(t)
return}e.confirmed||(e.confirmed=function(){t.dim()})
e.confirmed.call(t)
if(e.url){e.success||(e.success=function(e){t.fadeOut("slow",()=>{t.remove()})})
const n=e.prepareData?e.prepareData.call(t,s):{}
n.authenticity_token=Object(_["a"])()
c.a.ajaxJSON(e.url,"DELETE",n,s=>{e.success.call(t,s)},(s,n,r,a)=>{e.error&&c.a.isFunction(e.error)?e.error.call(t,s,n,r,a):c.a.ajaxJSON.unhandledXHRs.push(n)})}else{e.success||(e.success=function(){t.fadeOut("slow",()=>{t.remove()})})
e.success.call(t)}}
if(e.message&&!e.noMessage&&!c.a.skipConfirmations){if(e.dialog){n=false
const t="object"===typeof e.dialog?e.dialog:{}
const i=e.url.includes("assignments")?"btn-danger":"btn-primary"
s=c()(e.message).dialog(c.a.extend({},{modal:true,close:r,buttons:[{text:a.t("#buttons.cancel","Cancel"),click(){c()(this).dialog("close")}},{text:a.t("#buttons.delete","Delete"),class:i,click(){n=true
c()(this).dialog("close")}}]},t))
return}n=confirm(e.message)}r()}
c.a.fn.confirmDelete.defaults={get message(){return a.t("confirms.default_delete_thing","Are you sure you want to delete this?")}}
c.a.fn.fragmentChange=function(e){if(e&&true!==e){const s=(window.location.search||"").replace(/^\?/,"").split("&")
let n=null
for(var t=0;t<s.length;t++){const e=s[t]
e&&0===e.indexOf("hash=")&&(n="#"+e.substring(5))}this.bind("document_fragment_change",e)
const r=this
let a=false
for(t=0;t<c.a._checkFragments.fragmentList.length;t++){const e=c.a._checkFragments.fragmentList[t]
e.doc[0]==r[0]&&(a=true)}a||c.a._checkFragments.fragmentList.push({doc:r,fragment:""})
c()(window).bind("hashchange",c.a._checkFragments)
setTimeout(()=>{n&&n.length>0?r.triggerHandler("document_fragment_change",n):r&&r[0]&&r[0].location&&r[0].location.hash.length>0&&r.triggerHandler("document_fragment_change",r[0].location.hash)},500)}else this.triggerHandler("document_fragment_change",this[0].location.hash)
return this}
c.a._checkFragments=function(){const e=c.a._checkFragments.fragmentList
for(let t=0;t<e.length;t++){const s=e[t]
const n=s.doc
if(n[0].location.hash!=s.fragment){n.triggerHandler("document_fragment_change",n[0].location.hash)
s.fragment=n[0].location.hash
c.a._checkFragments.fragmentList[t]=s}}}
c.a._checkFragments.fragmentList=[]
c.a.fn.clickLink=function(){const e=this.eq(0)
e.hasClass("disabled_link")||e.click()}
c.a.fn.showIf=function(e){if(c.a.isFunction(e))return this.each((function(t){c()(this).showIf(e.call(this))}))
e?this.show():this.hide()
return this}
c.a.fn.disableIf=function(e){c.a.isFunction(e)&&(e=e.call(this))
this.prop("disabled",!!e)
return this}
c.a.fn.indicate=function(e){e=e||{}
let t
if("remove"==e){t=this.data("indicator")
t&&t.remove()
return}c()(".indicator_box").remove()
let s=this.offset()
e&&e.offset&&(s=e.offset)
const n=this.width()
const r=this.height()
const a=(e.container||this).zIndex()
t=c()(document.createElement("div"))
t.css({width:n+6,height:r+6,top:s.top-3,left:s.left-3,zIndex:a+1,position:"absolute",display:"block","-moz-border-radius":5,opacity:.8,border:"2px solid #870",backgroundColor:"#fd0"})
t.addClass("indicator_box")
t.mouseover((function(){c()(this).stop().fadeOut("fast",(function(){c()(this).remove()}))}))
this.data("indicator")&&this.indicate("remove")
this.data("indicator",t)
c()("body").append(t)
e&&e.singleFlash?t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow",(function(){c()(this).remove()})):t.hide().fadeIn().animate({opacity:.8},500).fadeOut("slow").fadeIn("slow").animate({opacity:.8},2500).fadeOut("slow",(function(){c()(this).remove()}))
e&&e.scroll&&c()("html,body").scrollToVisible(t)}
c.a.fn.hasScrollbar=function(){return this.length&&this[0].clientHeight<this[0].scrollHeight}
c.a.fn.log=function(e){console.log("%s: %o",e,this)
return this}
c.a.fn.fillWindowWithMe=function(e){const t=c.a.extend({minHeight:400},e),s=c()(this),n=c()("#wrapper"),r=c()("#main"),a=c()("#not_right_side"),i=c()(window),l=c()(this).add(t.alsoResize)
function _(){l.height(0)
const e=i.height()-(n.offset().top+n.outerHeight())+(r.height()-a.height()),_=Math.max(400,e)
l.height(_)
c.a.isFunction(t.onResize)&&t.onResize.call(s,_)}_()
i.unbind("resize.fillWindowWithMe").bind("resize.fillWindowWithMe",_)
return this}
c.a.fn.autoGrowInput=function(e){e=c.a.extend({maxWidth:1e3,minWidth:0,comfortZone:70},e)
this.filter("input:text").each((function(){let t=e.minWidth||c()(this).width(),s="",n=c()(this),r=c()("<tester/>").css({position:"absolute",top:-9999,left:-9999,width:"auto",fontSize:n.css("fontSize"),fontFamily:n.css("fontFamily"),fontWeight:n.css("fontWeight"),letterSpacing:n.css("letterSpacing"),whiteSpace:"nowrap"}),a=function(){setTimeout(()=>{if(s===(s=n.val()))return
r.text(s)
const a=r.width(),i=a+e.comfortZone>=t?a+e.comfortZone:t,c=n.width(),l=i<c&&i>=t||i>t&&i<e.maxWidth
l&&n.width(i)})}
r.insertAfter(n)
c()(this).bind("keyup keydown blur update change",a)}))
return this}
c.a},"dwl/":function(e,t,s){"use strict"
var n=s("An8g")
s("17x9")
var r=s("sTNg")
var a=s("YKS3")
s("q1tI")
function i(e){return Object(n["a"])("option",{value:e.id},e.id,e.name)}function c(e){return Object(n["a"])("optgroup",{label:e.name},"group_category_"+e.id,e.groups.map(e=>i(e)))}function l(e){return Object(n["a"])(r["a"],{id:"student-group-filter",label:e.label},void 0,Object(n["a"])("select",{onChange:t=>{e.onChange(t.target.value)},style:{margin:"0",width:"100%"},value:e.value||"0"},void 0,Object(n["a"])("option",{"aria-disabled":"true",disabled:"disabled",value:"0"},"0",a["a"].t("Select One")),e.categories.map(e=>c(e))))}t["a"]=l}}])

//# sourceMappingURL=147-c-09f05342ee.js.map