import request from "@/utils/request";

export function searchModelTypeById(params:{tid:string}) {
 return request({
   url: '/modelType/search/id/',
   method: 'get',
   params 
 });
}

// 获得所有模型类型
export function getAllType() {
 return request({
   url: '/modelType/allType/',
   method: 'get',
   params: { }
 });
}

export function searchModelTypeByName(params: {
  typeName: string,
}) {
 return request({
   url: '/modelType/search/typeName/',
   method: 'get',
   params  
 });
}

export function addModelType(data: {
  typeName: string,
}) {
 return request({
   url: '/modelType/addType/',
   method: 'post',
   data
 });
}