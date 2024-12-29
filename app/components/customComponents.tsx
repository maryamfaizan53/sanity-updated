'use client'
import {PortableTextComponents} from '@portabletext/react';

export const components:PortableTextComponents = {
    block:{
        h4:({children})=><h4 className='text-3xl font-bold text-black'>{children}</h4>

    },

    listItem:{
        bullet:({children})=><li className='list-disc marker:text-black list-inside ml-4'>{children}</li>
    },

    marks:{
        strong:({children})=><strong className='font-bold text-black dark:text-white'>{children}</strong>
    }
}


// push krna hai code/// ek kaam kro naa is repo ko del kro new repo pe kro then deploy kro/// yeh wala folder haina apn jis par kaam kar rhe teh..do jaga q khol k rkha hai vs code ek bnd krdo itni confusion ho rhe hai /// kia kru new bano repo?han na ye itna gurbr ho rhe hai new bnao shyd deply bhi hojai phr