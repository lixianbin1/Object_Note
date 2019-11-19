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

export const setTitle=(title)=>({ //目前的标题
  type:'setTitle',
  title
})
export const setUlist=(title='ulist')=>{ //设置Ulist展示的值
  let ulist=[],ListR=[],ListL=[]
  if(localStorage.getItem(title)){
    ulist=JSON.parse(localStorage.getItem(title))
  }
  if(title=='dlist'){
    for(let i=ulist.length-1;i>=0;i--){
      let ntime=new Date().getTime()
      console.log(i)
      let otime=ulist[i].clearTime
      let time=otime-ntime
      if(time>2592000000){
        ulist.splice(i,1)
      }
    }
  }
  for(let i in ulist){
    if(i%2==1){//奇
      ListR.push(ulist[i])
    }else{
      ListL.push(ulist[i])
    }
  }
  return({
    type:'setUlist',
    title,
    data:{
      ListL,
      ListR
    }
  })
}


export const setSelect=(select)=>({ //头部下拉出现判断依据
  type:'setSelect',
  select
})
export const selectBox=(select)=>({ // 便签是否出现选择框
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

export const clickDelete=(data,time)=>({ //点击下方按钮
  type:'clickDelete',
  data,
  time,
})
export const resotreList=(data)=>({
  type:'resotreList',
  data,
})
export const delectModal={ //删除modal
  type:'delectModal',
}
export const resumeModal={ //恢复modal
  type:'resumeModal',
}
export const resumeModal2={
  type:'resumeModal2',
}
export const closeModal={ //关闭modal
  type:'closeModal',
}
export const openMenu={ //开启菜单
  type:'openMenu',
}
export const closeMenu={
  type:'closeMenu',
}