export const TitleList={
  '便签':'ulist',
  '废纸篓':'dlist'
}
export const getDay=(n)=>{
  switch(n){
    case 0:
      return '星期日';
    case 1:
      return '星期一';
    case 2:
      return '星期二';
    case 3:
      return '星期三';
    case 4:
      return '星期四';
    case 5:
      return '星期五';
    case 6:
      return '星期六';
    default:
      return '未知'
  }
}
export const setUlist=(title)=>({
  type:'setUlist',
  title
})
export const setTitle=(title)=>({ //目前的标题
  type:'setTitle',
  title
})
export const setSelect=(select)=>({ //头部下拉出现判断依据
  type:'setSelect',
  select
})
export const selectBox=(select)=>({ //便签是否出现选择框
  type:'selectBox',
  select  
})
export const setText=(text)=>({ //便签的内容
  type:'setText',
  text
})
export const setDate=(time)=>({ //便签的 ID
  type:'setDate',
  time
})
export const setTData=(data)=>({ //
  type:'setTData',
  data
})
export const delectList=(list)=>({ //选中的ID列
  type:'delectList',
  list
})
export const windowResize=()=>({ //窗口大小调整
  type:'windowResize',
})
export const setLRlist=(name)=>({ //设置两侧数据
  type:'setLRlist',
  name,
})
export const clickDelete=(data)=>({ //点击下方按钮
  type:'clickDelete',
  data,
})