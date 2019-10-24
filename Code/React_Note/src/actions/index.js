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
export const setHeight=(height)=>({ //高度
  type:'setHeight',
  height
})
export const setWidth=(width)=>({ //宽度
  type:'setWidth',
  width
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
export const setLeft=(data)=>({ //左侧的数据
  type:'setLeft',
  data
})
export const setRight=(data)=>({ //右侧的数据
  type:'setRight',
  data
})
export const delectList=(list)=>({ //选中的ID列
  type:'delectList',
  list
})
