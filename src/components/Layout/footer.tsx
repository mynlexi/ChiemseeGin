import Link from 'next/link'
import React from 'react'

export const Footer = () => {
  return (
    <footer className="footer bg-white relative pt-1 border-b-2 border-blue-700">
    <div className="container mx-auto px-6">

        <div className="sm:flex sm:mt-8">
            <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mb-2">Footer header 1</span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 1</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 2</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 3</a></Link></span>
                </div>
                <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 2</span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 4</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 5</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 6</a></Link></span>
                </div>
                {/* <div className="flex flex-col">
                    <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">Footer header 3</span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 7</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 8</a></Link></span>
                    <span className="my-2"><Link href="x"><a className="text-gray-900  text-md hover:text-blue-500">link 9</a></Link></span>
                </div> */}
            </div>
        </div>
    </div>
    <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
            <div className="sm:w-2/3 text-center py-6">
                <p className="text-sm text-gray-900 font-bold mb-2">
                    © 2021 by ChiemseeGin
                </p>
            </div>
        </div>
    </div>
</footer>
  )
}
