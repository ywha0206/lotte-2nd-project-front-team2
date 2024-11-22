import React, { useState } from 'react'
import '@/pages/admin/Admin.scss'
import {CustomSearch} from '@/components/Search'
import { CustomButton } from '../../components/Button';
import AdminSidebar from '../../components/admin/AdminSidebar';
import AdminHeader from '../../components/admin/AdminHeader';

export default function AdminOutSourcing() {
    const [selectOption, setSelectOption] = useState(0);

    const optionChanger = (e)=>{
        setSelectOption(Number(e.target.value))
        console.log(selectOption)
    }

    const userHandler = (e) => {

    }
  return (
    <div id='admin-outsourcing-container'>
      <AdminSidebar />
      <section className='admin-outsourcing-main'>
      <AdminHeader />
            <section className='flex items-center gap-4 mb-12'>
                <div className='ml-4 text-2xl'>
                    <select value={selectOption} onChange={optionChanger} className='outline-none border rounded-md text-xl p-2 text-center'>
                        <option value={0}>외주업체 현황</option>
                        {/* <option value={1}>소속인원</option>
                        <option value={2}>배정업무</option>
                        <option value={3}>요청사항</option> */}
                    </select>
                </div>
                <div className='ml-auto flex'>
                    <CustomSearch 
                        width1='40'
                        width2='72'
                    />
                </div>
                <select className='text-center opacity-80 w-24 h-10 outline-none border'>
                    <option>회사명</option>
                    <option>번호</option>
                    <option>파견부서</option>
                    <option>결제일</option>
                </select>
                <div>7 / 11</div>
            </section>
            <table className="w-full table-auto border-collapse mb-16">
            <thead className='bg-gray-200 h-16'>
                <tr className='text-center'>
                    <th className="w-1/10 rounded-tl-lg"><input type="checkbox" /></th>
                    <th className="w-1/10">번호</th>
                    <th className="w-2/10">회사명</th>
                    <th className="w-2/10">전화번호</th>
                    <th className="w-1/10">파견인원</th>
                    <th className="w-1/10">파견부서</th>
                    <th className="w-1/10">배정업무</th>
                    <th className="w-1/10">결제일</th>
                    <th className="w-1/10 rounded-tr-lg">진행도</th>
                </tr>
            </thead>
            <tbody className='h-16'>
                <tr className='text-center'>
                    <td className="w-1/10"><input type="checkbox" /></td>
                    <td className="w-1/10">1</td>
                    <td className="w-2/10">홍길동</td>
                    <td className="w-2/10">개발</td>
                    <td className="w-1/10">활동</td>
                    <td className="w-1/10">정상</td>
                    <td className="w-1/10">사원</td>
                    <td className="w-1/10">2024-01-01</td>
                    <td className="w-1/10">비고 없음</td>
                </tr>
            </tbody>
            <tbody className='h-16'>
                <tr className='text-center'>
                    <td className="w-1/10"><input type="checkbox" /></td>
                    <td className="w-1/10">1</td>
                    <td className="w-2/10">홍길동</td>
                    <td className="w-2/10">개발</td>
                    <td className="w-1/10">활동</td>
                    <td className="w-1/10">정상</td>
                    <td className="w-1/10">사원</td>
                    <td className="w-1/10">2024-01-01</td>
                    <td className="w-1/10">비고 없음</td>
                </tr>
            </tbody>
            <tbody className='h-16'>
                <tr className='text-center'>
                    <td className="w-1/10"><input type="checkbox" /></td>
                    <td className="w-1/10">1</td>
                    <td className="w-2/10">홍길동</td>
                    <td className="w-2/10">개발</td>
                    <td className="w-1/10">활동</td>
                    <td className="w-1/10">정상</td>
                    <td className="w-1/10">사원</td>
                    <td className="w-1/10">2024-01-01</td>
                    <td className="w-1/10">비고 없음</td>
                </tr>
            </tbody>
        </table>    
        <section className='flex justify-end gap-4 text-xs mb-10'>
        <button onClick={userHandler} className='bg-blue white h-10 rounded-xl w-28'>파견자등록</button>
        </section>
        <section className="flex justify-center mt-20">
            <div className="flex items-center space-x-2">
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200">
                    <span className="hidden sm:inline">이전</span>
                    <svg className="w-4 h-4 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M15 19l-7-7 7-7"></path>
                    </svg>
                </button>
                <button className="px-4 py-2 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg text-sm font-semibold hover:from-blue-400 hover:to-indigo-400">
                1
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400">
                2
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-700 hover:bg-gray-400">
                3
                </button>
                <button className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-semibold text-gray-600 hover:bg-gray-400 focus:outline-none disabled:cursor-not-allowed disabled:bg-gray-200">
                    <span className="hidden sm:inline">다음</span>
                    <svg className="w-4 h-4 sm:hidden" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
                        <path d="M9 5l7 7-7 7"></path>
                    </svg>
                </button>
            </div>
        </section>           
      </section>
    </div>
  )
}
