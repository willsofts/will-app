# will-app : Document Classes Usage

## PagingOffsetsInfo
เป็นโครงสร้างข้อมูล (Data Structure) สำหรับเก็บข้อมูลเกี่ยวกับ page/offset

- page: ชนิด number - เลขหน้าที่อ้างอิง
- rowsPerPage: ชนิด number - จำนวนรายการต่อหน้า
- totalRows: ชนิด number - จำนวนรายการทั้งหมด
- totalPages: ชนิด number - จำนวนหน้าทั้งหมด
- limit: ชนิด number - ข้อจำกัดการแสดง page
- offset: ชนิด number - เลข offset
- rows: ชนิด number - จำนวน rows ในหน้านั้น
- orderBy \`(optional)\`: ชนิด string - ฟิลด์สำหรับจัดเรียง
- orderDir \`(optional)\`: ชนิด string - ทิศทางการจัดเรียง

## PagingNumberInfo
เป็นโครงสร้างข้อมูล (Data Structure) สำหรับเก็บข้อมูลการแสดงผลเลขหน้า

- page: ชนิด number - เลขหน้า
- text: ชนิด string - ข้อความที่จะแสดง เช่น 1, 2, ">>" 
- css: ชนิด string - คลาสที่ใช้สำหรับการทำ style

## Paging
คลาสที่ใช้จัดการเกี่ยวกับการแบ่งหน้า (Pagination)

- constructor(setting = {}) 
กำหนดค่าเริ่มต้นให้กับ PagingOffsetsInfo หากไม่ได้กำหนด [PagingOffsetsInfo](#pagingoffsetsinfo) จะมีการใช้ค่าอัตโนมัติ \`{ page: 1, rowsPerPage: 10, totalRows: 0, totalPages: 1, limit: 10, offset: 10, rows: 0, orderBy: "", orderDir: "" }\`
- clear() 
ล้างค่าและกลับสู่ค่าเริ่มต้นของ [PagingOffsetsInfo](#pagingoffsetsinfo)
- reset(setting: Object) 
กำหนดค่าใหม่ทับ [PagingOffsetsInfo](#pagingoffsetsinfo) เดิม
- hasPaging(rows: number) 
ตรวจสอบว่าในจำนวนข้อมูลนั้นมีการแบ่งหน้าหรือไม่ (คืนค่าเป็น boolean)
- recordsOffset() 
คำนวณและคืนค่า offset สำหรับนำไปอ้างอิงลำดับ row (คืนค่าเป็น number)
- recordsNumber(seqno: number) 
คำนวณหมายเลขที่เชื่อมกับ offset เพื่อระบุลำดับ (คืนค่าเป็น number)
- buildPagingModel(opts?: any) 
ใช้สร้างข้อมูลโครงสร้างชุดเลขหน้า อิงตาม properties ของ Pagination เช่น รวมปุ่ม previous และ next โดยคืนค่าข้อมูลเป็นอาร์เรย์ของ [PagingNumberInfo](#pagingnumberinfo)

## AppInfo
ฟังก์ชันชุดนี้จัดการเกี่ยวกับการตั้งค่าและการทำงานของแอปพลิเคชัน (AppInfo)

- getConfig(key: string)
ใช้ดึงค่า Config ตามการระบุ key (คืนค่าเป็น any)
- getAppInfo()
ดึงข้อมูล AppInfo ทั้งหมด (คืนค่าเป็น json object)
- registerNotification(callback: Function)
ลงทะเบียน callback ฟังก์ชันสำหรับรับแจ้งเตือน
- getMultiLanguages()
คืนค่าข้อมูลภาษาที่มีในแอปเป็นอาร์เรย์ (string[])
- setMultiLanguages(values: any)
รับค่าอาเรย์เพื่อตั้งค่าชุดภาษา
- getDefaultLanguage()
ดึงรหัสภาษาที่ถูกตั้งให้เป็นค่าตั้งต้น (คืนค่าเป็น string)
- setDefaultLanguage(language: string)
ตั้งค่าภาษาหลักของแอป
- getApiToken()
ดึงค่า token หรือรหัสที่ใช้ติดต่อ API (คืนค่าเป็น string)
- setApiToken(value: string)
ตั้งค่าคำขอ API token
- getApiUrl(), getBaseUrl(), getCdnUrl(), getImgUrl(), getChatUrl()
ดึงค่าเส้นทาง URL พื้นฐานต่าง ๆ (คืนค่าเป็น string)
- setApiUrl(value), setBaseUrl(value), setCdnUrl(value), setImgUrl(value), setChatUrl(value)
ตั้งค่าเส้นทาง URL ปลายทางของแอปพลิเคชัน
- getBaseStorage()
ดึงรูปแบบ Storage (เช่น local/session)
- getDefaultRawParameters()
ตรวจสอบว่ามีการใช้พารามิเตอร์แบบดั้งเดิมหรือไม่ (คืนค่าเป็น boolean)
- setDefaultRawParameters(value: boolean)
กำหนดการใช้งานพารามิเตอร์ดั้งเดิม
- isSecureStorage()
ตรวจสอบสถานะว่าใช้ Secure Storage หรือไม่
- getBaseCss(), setBaseCss(value)
ดึงหรือตั้งค่าเส้นทาง CSS พื้นฐาน
- getTokenKey(), setTokenKey(value)
ดึงและตั้งค่า key ของ token สำหรับตรวจสอบ Session
- getMetaInfo(), setMetaInfo(value)
ดึงหรือตั้งค่าข้อมูล meta (ตั้งค่าหน้าจอ/สไตล์เฉพาะ)
- getProgramMessage()
คืนค่าอาร์เรย์ของ message ที่ตั้งไว้
- getProgramLabels()
คืนค่าฉลากคำภาษาต่าง ๆ ที่กำหนดให้ระบบ
- appInit(options?: any, callback?: Function)
กำหนดและออกแบบการเริ่มการทำงานตั้งต้น สามารถกำหนดฟังการติดต่อ child หรือ parent
- getMultiLanguagesModel(datas?: any)
เอาไว้ช่วยสร้าง Model แสดงผล Label ภาษาแบบหลายอัน
- assignAppConfig(data: any, callback?: Function)
ประกอบการตั้งค่าที่ถูกโยนเข้ามาพร้อมปรับปรุง AppInfo และเริ่มเรียกใช้งาน CSS
- loadAppConfig(callback?: Function, url: string = "../config/app.config.json")
ดึงข้อมูล App Config ผ่าน URL พร้อมประกอบการตั้งค่า
- initConfigure()
ตั้งค่า Token และส่วนสำคัญขั้นต้น
- initAppConfig(callback?: Function)
ตั้งค่า Config ฝั่ง Global ออกไป

## AppUtil
ทำงานทั่วไปที่เกี่ยวกับ Component กรอบหน้าต่าง รวมถึงการคุยผ่าน Alert box

- getChildWindows()
ดึงข้อมูลอาร์เรย์ของรายชื่อ Child Windows ทั้งหมด
- setDragFunction(func?: Function)
ตั้งค่าแมนนวลการลาก (Drag)
- getWindowOpen(win: any)
ตรวจสอบว่ามีการเปิดหน้าต่างอ้างอิงอยู่ไหม
- getWindowByName(winname: string)
เรียกหน้าต่างแยกตามชื่อ
- closeChildWindows()
ปิดหน้าต่างลูก (Child windows) ทั้งหมดที่มีการเปิดอยู่
- openNewWindow(settings: any)
สั่งเปิดหน้าต่างใหม่พร้อมตั้งค่าต่าง ๆ ขนไปพร้อม Form
- startWaiting()
แสดงเลเยอร์สำหรับรอการทำงาน
- stopWaiting()
หยุดแสดงเลเยอร์สำหรับรอ
- submitFailure(xhr?: any, status?: number|string, errorThrown?: string, checking=true)
จัดการเหตุการณ์ที่ request ถูกปฏิเสธ หรือพบ Error (เช่น 401)
- parseErrorThrown(xhr?: any, status?: number|string, errorThrown?: string)
สกัดข้อมูล Error ให้เหลือ Text ที่ใช้แสดงประโยชน์
- detectErrorResponse(data: any)
ตรวจสอบ flag error เพื่อสั่ง alert
- successbox(callback?: Function, params?: any)
แสดงหน้าต่าง Information สำเร็จ
- warningbox(errcode: string, callback?: Function, params?: any)
แสดงหน้าต่างเตือนทั่วไป
- alertbox(errcode: string, callback?: Function, defaultmsg?: string, params?: any, addonmsg?: string, title?: string, icon?: string)
แสดงหน้าต่าง Alert ย่อยแบบกำหนดเอง
- alertDialog(msg?: string, callbackfn?: Function, title="Alert", icon="fa fa-bell-o fas fa-bell")
คำสั่งให้ Bootbox แสดงกล่องความเห็น
- confirmbox(errcode: string, okFn?: Function, cancelFn?: Function, defaultmsg?: string, params?: any, addonmsg?: string, title?: string, icon?: string)
แสดง Alert การยินยอมยืนยัน (OK / Cancel)
- confirmDialog(msg?: string, okCallback?: Function, cancelCallback?: Function, title="Confirmation", icon="fas fa fa-question-circle")
เรียกกล่อง Dialog แจ้งยืนยัน
- confirmDelete, confirmSave, confirmCancel, confirmRemove, confirmSend, confirmUpdate, confirmClear, confirmProcess, confirmSaveAs, confirmReceive, confirmReset, confirmErase, confirmApprove, confirmReject, confirmRequest, confirmImport, confirmExport, confirmResend, confirmRevise
แสดง Dialog ในหมวดที่เกี่ยวข้องแต่ละรูปแบบ
- startApplication(pid: string, callback?: Function)
เริ่มผูก Event ต่างๆ ก่อนจะเข้า Application ของผู้ใช้
- setupApplication(callback?: Function)
ขอข้อมูล access info ของผู้เข้าถึงปัจุบัน
- serializeParameters(parameters?: any, addonParameters?: any, raw?: boolean)
เรียบเรียงและเข้ารหัสตัวแปรที่จะทำการ Request
- decryptCipherData(headers: any, data: any)
ถอดรหัสตัวแปรที่รับมาให้อ่านเป็น JSON
- createLinkStyle(css_url?: string)
สร้าง Tag HTML link style dynamically แบบใหม่
- disableControls(...elements: any[])
เพิ่มการห้ามใช้งานแบบชั่วคราวแก่ object element ที่แนบใน parameters (ป้องกันการกดซ้ำ)
- generateUUID(), getRequestID(), resetRequestID()
สร้างหรือจัดการ UUID สำหรับยืนยันแต่ละ transaction
- randomize()
ขอตัวเลขแรนดอมที่มีระดับความปลอดภัยสูง

## CtrlUtil
ตัวจัดการ Control ภายในหน้าจอเว็บ เช่น การกรอกตัวเลขแบบรวดเร็ว และ Control กล่องฟอร์แมต

- getControlClasses(attrClass: string, ...classes: string[])
เพิ่ม class ที่ส่งมารวมเข้าไปใน attrClass ที่มีอยู่ 
- clearCalendar(src: any)
ล้างข้อมูลใน Datepicker (ปฏิทินที่ถูกผูกไว้)
- openCalendar(src: any)
แสดงปฏิทินของ Object ถ้าไม่ถูก disabled หรือ readonly
- triggerInput(input: any)
สั่งให้เกิดเหตุการณ์ input ใน DOM นั้น ๆ
- inputNumberOnly(myfield: any, e: any, decimal: number|string, isPlus?: boolean)
ตรวจสอบและบังคับการพิมพ์ให้รับเฉพาะตัวเลข 
- checkInputNumberOnly(myfield: any, e: any, decimal: number|string, isPlus: boolean)
เช็คการรับตัวเลขที่มี flag state
- checkInputKey(myfield: any, event: any, decimal: number|string, maxvalue: number|string)
จัดการ format ค่าตัวเลข ระหว่างที่กำลังกรอก
- formatNumber(element: any, maxvalue: number|string, decimal: number|string)
ฟอร์แมตตัวเลขใน element และเติมคอมม่า
- putComma(data: string)
เติมเครื่องหมาย comma หรือคอมมาลงไปในตัวเลขเพื่อแสดงผล
- clearComma(data: string)
ล้างเครื่องหมาย comma หรือคอมมาออกจากตัวเลข 
- getCaretPosition(ctrl: any) / setCaretPosition(ctrl: any, iCaretPos: number)
ดึงและกำหนดตำแหน่งของ cursor
- parseNumber(avalue: string)
นำตัวเลขที่มีตัวแบ่งหรือคอมม่า แปลงกลับเป็นค่า number ออริจินอล
- formatFloating(avalue: string, decimal: number)
แปลง string ตัวเลข ให้มี decimal ด้วยทศนิยมตามช่อง
- formatDecimal(avalue: any, decimal: number, verifydecimal: boolean)
ตัวช่วยแบ่งทศนิยม และการทำงานเกี่ยวกับตัวเลข
- ensureTableSetting(settings: any)
บังคับรูปแบบพื้นฐานของ Action บน Table
- formatDataTable(data: any, field: any)
ช่วยการแปลงข้อมูลให้เหมาะสมตามประเภท DATE, DATETIME หรือ DECIMAL ก่อนแสดงผล

## DH
คลาสเกี่ยวกับ Diffie-Hellman อัลกอริทึม (จัดการเรื่องเข้ารหัสและความปลอดภัย)

- constructor()
สร้าง keys เบื้องต้น
- encryptText(word: string, keyBase64: string)
เข้ารหัสข้อความ (อ้างอิงจาก base64 key แยก) คืนค่าเป็น string
- decryptText(word: string, keyBase64: string)
ถอดรหัสข้อความผ่าน base64 key คืนค่า string 
- encrypt(word: string)
เข้ารหัสผ่าน shared key
- decrypt(word: string)
ถอดรหัสผ่าน shared key
- computePublicKey()
สร้าง public key สำหรับส่งหากัน
- computeSharedKey()
สร้าง key สำหรับแบ่งปัน
- compute()
ทำ compute สร้างกุญแจเข้ารหัสใหม่
- requestPublicKey(dh?: DH, callback?: Function, aurl?: string)
ส่ง Request ดึง Public Key
- submitPublicKey(callback?: Function, aurl?: string)
บันทึก Public Key เข้าสู่ Server
- updatePublicKey(callback?: Function, aurl?: string)
ปรับปรุงกุญแจในระบบ

## JqueryUtil
ฟังก์ชันสำหรับการเรียกใช้งาน jQuery จาก Window Object  

- getJQuery()
ใช้สำหรับเรียกอ้างอิงของ jQuery ป้องกันหน้าต่างหาไม่พบ

## KnMask
ช่วยในการจัดการทำ Mask (รูปแบบปิดบังข้อความ)
- constructor(maskChar = "*")
สร้าง object เพื่อใส่ค่าเครื่องหมายการ Mask
- static maskingNumber(text?: string, mask: string = "####-xxxx-####", maskChar: string = "*")
ทำการแปลง Mask ของตัวเลขตาม pattern
- static maskingHead(text?: string, maskLength: number = 4, maskChar: string = "*")
มาสก์ข้อความส่วนหน้า แต่อรุญาตให้ตัวท้ายยังมองเห็น
- static maskingTail(text?: string, maskLength: number = 4, maskChar: string = "*")
มาสก์ข้อความส่วนหลัง ให้หน้า 4 ลำดับแรกยังมองเห็น
- static maskingHeadAndTail(text?: string, maskLength: number = 4, maskChar: string = "*")
มาสก์หน้าและหลัง เว้นตรงกลางมองเห็น
- maskHead(text, maskLength), maskNumber(text, mask), maskTail(text, maskLength), maskHeadAndTail(text, maskLength)
รูปแบบการเรียกใช้ที่เป็น method จากออบเจ็กต์
- static maskingSensitive(json: any, attributes: string[] = ["password","pwd"])
คัดลอกคืนค่า object ใหม่ที่มีการลบค่า key ตัวที่ตรงกับ attributes ออก
- static maskingSensitiveObject(json: any, attributes: string[] = ["password","pwd"])
เปลี่ยนแปลงตรงยัง object ปัจจุบันที่มี key เทียบเท่าเพื่อลบข้อมูลทิ้ง
- static maskingAttribute(json: any, attributes: string[] = ["password","pwd"])
การคัดลอกคืนมาเป็น object ใหม่ที่มีการเขียนทับ key ด้วย * 
- static maskingAttributeObject(json: any, attributes: string[], mask: string)
เปลี่ยนแปลงตรงกับ object ให้กลายเป็นแบบปิดบังด้วยเครื่องหมาย *

## LabelUtil
จัดเกี่ยวกับการเรียกของ Label หรือฉลากแสดงให้ผู้ใช้เลือกตามแต่ละภาษาต่างๆ

- getLabel(name: string, defaultLabel: string, lang = getDefaultLanguage())
ฟังก์ชันหาคำในฉลากภาษาตาม tag
- getLabelItem(name: string, lang: string, label_category: Array<any>)
ดึงค่า Label ทั้งส่วนเป็นไอเทม
- getLabelObject(lang : string | undefined, label_category: Array<any>)
ดึงค่า Object ภาษาแบบรวบยอด
- getLabelModel(lang = getDefaultLanguage())
แปลงค่าให้กลายเป็น model เพื่อใช้ผูกเข้ากับโครงสร้างข้อมูล
- getApiLabel()
เรียกเส้นทาง API เพื่อของดึง Label
- mergeProgramLabels(data_labels:any)
ฟังก์ชันรวม Label หลายส่วนเข้ามาด้วยกัน
- loadAndMergeLabel(id: string, callback?: Function, loadLabel: boolean, url: string)
สั่งโหลดเพิ่มการ merge รวมถึงโหลด message ไปด้วย
- loadAndMergeProgramLabel(id: string, callback?: Function, loadLabel: boolean, url: string)
คำสั่งเฉพาะโหลด Program Label โดยอ่านจาก cache ส่วนถ้าไม่มีให้ไปเรียกใหม่
- fetchLabel(id: string, callback: Function, url: string)
ใช้ ajax ไปขอฉลากจาก API โดยตรง

## Messenger
ทำหน้าที่เกี่ยวข้องกับการคุยโต้ตอบ ส่งสาร ผ่าน Window object และ Session Storage

- getSecureEngine()
สั่งให้ทำงานเตรียมการเรื่องการเก็บ Storage อย่างปลอดภัย (Secure-ls)
- setMessagingCallback(callback?: Function)
เตรียมไว้สำหรับระบบสื่อสารผูก callback
- getCurrentWindow() / setCurrentWindow(curwin)
กำหนดหน้าต่างทำงานในหน่วยความจำ
- getStorage(key: string)
หยิบข้อมูลของ storage ผ่าน key
- setStorage(key: string, value: string)
บันทึกข้อมูลเข้า storage
- removeStorage(key: string)
ถอนข้อมูลของ storage
- getAccessorInfo()
คืนข้อมูลเกี่ยวกับผู้เข้าถึง รวมถึง info ของผู้ใช้ 
- getAccessorToken(), getAccessTokenKey()
ให้ค่า Token ที่มีในระบบตอนนี้
- saveAccessorInfo(json: any) / removeAccessorInfo()
เก็บข้อมูลหรือจำกัดผู้ใช้เกี่ยวกับการเข้าใช้งาน
- sendMessageInterface(type: string, win?: any)
ทอดสะพานเพื่อส่งข้อความสู่การสื่อสาร (Storage/Config)
- sendMessageToFrame(data: any, win?: any)
นำ Message ส่งไปยัง list ของ Iframe เพื่อให้ทำงานตามที่กำหนด
- requestAccessorInfo(callback?: Function)
เรียกขอตัวข้อมูล info 
- sendMessageToParent(data: any) / sendMessageToOpener(data: any)
ยื่นประมูลสั่งข้อมูลหา Parent Document หรือ Opener Object กลับไป
- handleRequestMessage(data: any)
ประมวลผลเมื่อมีข้อมูลร้องขอมาเป็น event
- setupDiffie(json: any)
ตั้งค่ากุญแจหลังมีข้อมูลกลับมาจากฝั่งระบบ Server
- getDH()
พยายามดึงกุญแจ Diffie ที่เก็บไว้ออกมา
- bindingChildMessaging() / bindingParentMessaging(callback?: Function)
สั่งให้จับ event การส่งข้อมูลสื่อสารระหว่างหน้าต่างลูก หรือผู้สร้าง (Parent) 

## MsgUtil
ใช้งานเกี่ยวเพื่อการแสดง Error Message, Code, หรือ Parameter String ตาม Format

- getMessageCode(errcode: string, params?: Array<any>, defaultMessage?: string)
ค้นหา Message ที่ผูกกับระบบจาก Error Code
- replaceString(str: string, arrStr?: Array<any>)
ใช้แทนคำ (Replace %s) เพื่อสร้างข้อความที่มีพารามิเตอร์ต่อท้าย
- mergeMessageCodes(data_messages: any)
รวมและจัดการ Message Array 
- getApiMessageCode()
ให้ที่อยู่เพื่อต่อรับ Message Code API
- loadAndMergeMessageCode(callback?: Function, loadMessageCode: boolean, url: string)
เรียกโหลดข้อความและทำแคชด้วยการ merge ไปกับ Message ประจำระบบ
- fetchMessageCode(code?: string, callback?: Function, url: string)
เรียก Ajax Post ยิงไปเพื่อดึงก้อนข้อมูลแปลความหมาย Message Code

## Permission
เป็นคลาสครอบส่วนตรวจสอบระบบ Permission หลัก สำหรับตารางตัวแปร [DEFAULT_PERMITS](#default_permits) 
- constructor(setting = { })
ใช้ข้อมูลเริ่มต้นผูกไปเพื่อสร้าง object 
- canDo(action: string)
ตรวจสอบว่ามีการปักหมุดว่ามีสิทธิ์ใน action นี้ไหม (คืนค่า boolean)

## PermitUtil
เป็นฟังก์ชันการตรวจสอบ Permit ของบัญชีผู้ใช้ในหน้าต่างๆ

- getPermitModel(pid: string)
ให้สิทธิ์ของหน้าต่างทำงาน ผ่าน Program ID ของหน้า คืนค่าเป็น instance ของ [Permission](#permission)
- loadPermissions(pid: string)
ดึงสิทธิ์ผู้ใช้งานประจำรหัสผู้ใช้คนนี้จาก API เข้ามาบันทึก

## DEFAULT_PERMITS
ข้อมูล JSON สถานะตั้งต้นสำหรับเช็คสิทธิ์ ประกอบการใช้งานใน [Permission](#permission)

| action | type | value |
| --- | --- | --- |
| all | boolean | false |
| insert | boolean | false |
| retrieve | boolean | false |
| update | boolean | false |
| delete | boolean | false |
| import | boolean | false |
| export | boolean | false |
| launch | boolean | true |
| print | boolean | false |

## PwdUtil
ประกอบด้วยการช่วยประมวลของแบบสอบทานรหัสผ่าน

- randomPassword()
สุ่มข้อความแรนดอมออกมา คืนสตริงสำหรับการเป็น Password ชั่วคราว
- getAlphabets(text?: string)
บอกถึงปริมาณอักษรที่ปรากฏใน Text แนะนำ
- getDigits(text?: string)
นับหาจำนวนตัวเลขที่ปรากฏใน Text
- isDigit(c: string)
เช็คค่าข้อความรับเข้าไปเป็นจำนวนเงิน (เลข) ไหม
- isLetter(c: string)
เช็คข้อความรับว่าอักษรไหม
- isLowerCase(c: string) / isUpperCase(c: string)
เช็คแบบลักษณะการพิมพ์ว่าเป็นอักษรตัวน้อยตัวใหญ่
- indexOfAlphabets(text?: string)
ตำแหน่งของตัวแรกที่เป็นอักษร
- createNewPassword()
พยายามรังสรรค์รหัสผ่านชั่วคราวอันใหม่ ที่สามารถมีข้อความตัวใหญ่อย่างน้อย 1 ตัว
- checkNumberOnly(text?: string)
ตรวจสอบว่ารหัสเป็นเลขล้วนหรือไม่

## RandomUtil
แหล่งรวมของการใช้ Function สร้างค่าสุ่ม

| ตัวแปร | ชนิด | ค่าคงที่ |
| --- | --- | --- |
| ALPHABETS | array | ["A"..."Z", "0"..."9"] |
| NUMERICS | array | ["0"..."9"] |

- getRandomNumber(min = 1, max = 1000000)
สุ่มตัวเลขแบบรวดเร็วแล้วคืนกลับ
- random(len = 6, alphabets = ALPHABETS)
ใช้การประมวลสุ่มชุดตัวอักษรและตัวเลขที่มีใน String หรือ Array ให้คืนออกมาตามความยาว
- randomNumber(len = 6, alphabets = NUMERICS)
สุ่มแบบเฉพาะตัวเลขล้วน โดยมีความยาวตามคำสั่ง

## Utilities
การจัดการข้อมูลเวลาและชุดข้อความประมวล

| ตัวแปร | ชนิด | ค่าคงที่ |
| --- | --- | --- |
| NORMAL | number | 0 |
| INTER | number | 1 |
| SHORT | number | 0 |
| LONG | number | 1 |
| SHORT_MONTH_ARRAY | array | ["Jan", "Feb", ...] |
| LONG_MONTH_ARRAY | array | ["January", "February", ...] |
| SHORT_WEEK_DAY | array | ["Sun","Mon",...] |
| LONG_WEEK_DAY | array | ["Sunday","Monday",...] |

- getDateNow(now?: Date)
ดึงเอาวันที่ออกมาแสดงผลในระดับแบบ dd/MM/yyyy
- getTimeNow(now?: Date)
ดึงเอาเวลาออกมาแสดงผลรูปแบบ HH:mm:ss
- getDateTimeNow(now?: Date)
เอาวันที่และเวลารวมเป็น dd/MM/yyyy HH:mm:ss
- getYMD(now?: Date)
เอาวันที่และเวลาจัดเป็นการสลับฝั่ง yyyy-MM-dd
- getDMY(now?: Date)
ให้วันที่เช่นเดียวกันกับ getDateNow (dd/MM/yyyy)
- formatDate(now?: Date, ymd: boolean = false)
ให้วันที่แบบเลือกได้ด้วย parameter ว่าจะ yyyy-MM-dd หรือ dd/MM/yyyy
- formatTime(now?: Date)
เหมือน getTimeNow แต่ถูกออกแบบมาให้ชื่อคล้ายๆกัน
- formatDateTime(now?: Date, ymd: boolean = false)
ทำงานเสมือน getDateTimeNow แต่ย่อมใช้ parameter ymd ได้ด้วย
- getHMS(now?: Date)
ให้เวลาออกมาแบบ toString แท้ (ค่าเดิมระบบ)
- currentDate(now?: Date)
แสดงผล currentDate ปกติเป็น format yyyy-MM-dd
- currentTime(now?: Date)
แสดงผลเป็น HH:mm:ss แบบอ้างอิงตรง
- currentTimeMillis(now?: Date)
ให้เวลาปัจจุบันเป็น milli seconds
- addDays(days: number, date?: Date)
เสริมค่า Date ไปตาม days (คืนเป็นวันที่เพิ่มไปแล้ว Date Object)
- compareDate(adate?: Date, bdate?: Date)
เทียบความเหมือนความต่าง วันที่ (-1, 0, 1)
- compareTime(adate?: Date, bdate?: Date)
เปรียบความเหมือนของเวลา (-1, 0, 1)
- compareDateTime(adate?: Date, bdate?: Date)
เทียบวันเวลาด้วยกัน (-1, 0, 1)
- compareString(astr?: string, bstr?: string)
ใช้เทียบอักษรสลับเพื่อดูการเรียงลำดับ
- equalsIgnoreCase(astr?: string, bstr?: string)
ดูว่าเหมือนกันโดยการไม่นับ Case (ใหญ่/เล็ก)
- isString(value: any)
ตรวจสอบตัวแปรว่ามีสภาพคงอยู่เป็น String ใช่หรือไม่
- hasAttributes<T>(element: unknown, attributes: readonly T[])
สอบทาน object ว่าการผูกติด element ทุก attribute
- parseInteger(dataValue?: any, defaultValue?: number)
ประมวลตัวเลขจาก value ของ string โดยถอด comma ได้ด้วย (คืนค่า number)
- parseFloat(dataValue?: any, defaultValue?: number)
แปลง string ให้อยู่ในสถานะลอยตัวมีทศนิยม (คืนค่า number)
- parseBoolean(dataValue?: any, defaultValue?: boolean)
แปลงรูปแบบเป็น Boolean เพื่อใช้งาน 
- parseDate(dataValue?: any, defaultValue?: Date)
จัดค่าพยายามให้ระบบผันจาก String ออกมาอยู่ในรูป Date
- parseTime(dataValue?: string, defaultValue?: Date)
จัดสตริงที่มีโครงสร้างเวลา ให้มาอยู่ในรูป Date Object เฉพาะส่วนเวลา
- now()
สร้าง Date Object ปัจจุบัน
- translateVariables(template: string, variables: any)
เขียนทับตัวแปรเข้ากับ Text ที่มี $\\{key\\} โดยการดึง value ออกมาใส่ 
- serializeTimestamp(now: Date, delimiter?: string, includeMillis: boolean = true)
แปลง Date ส่งเป็นชุด string ของเวลา (แบบไม่มีตัดทอน) ตัวอย่าง: yyyyMMddHHmmssSSS
- getFormatDate(date: Date, fortype: number, delimiter: string, forstyle: number, separater: string)
ขอการจัด Date ให้มีการประกอบด้วยข้อความการคั่นแบบตั้งเอง
- getShortDate(date: Date, delimiter: string, forstyle: number)
ให้รูปแบบ Date ประกอบกับจุดแบบย่อ (อ้างอิง SHORT_MONTH_ARRAY)
- getLongDate(date: Date, delimiter: string, forstyle: number)
ให้รูปแบบ Date แบบยาวจัดเต็ม (อ้างอิง LONG_MONTH_ARRAY)
- getWeekDay(date: Date, fortype: number)
เรียกคืนรายชื่อวันด้วย fortype เช่น LONG = Monday, SHORT = Mon
- getShortWeekDay(date: Date)
เรียกชื่อวันแบบสั้น
- getLongWeekDay(date: Date)
เรียกชื่อวันแบบยาว
- getFormatWeekDate(date: Date, fortype: number, delimiter: string, forstyle: number, separater: string)
ประสานการดึง getFormatDate เข้ากับชื่อของวันในสัปดาห์ นำมาต่อกัน
- date(input?: string | number, defaultValue?: Date)
ตัวครอบจักรวาลสำหรับการเอาตัวแปรที่ไม่แน่นอน เข้ามาประกอบใหม่ให้อยู่ในสภาพของ Date Object ปัจจุบัน
- hasValue(val: any)
หาค่าว่าเป็นความว่างเปล่าหรือไม่ (เช็ค != null, undefined, "")
