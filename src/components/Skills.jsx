import React from 'react'

const Skills = () => {

    const texts = [
        {
            id: 1,
            src: "https://raw.githubusercontent.com/theyashpatel/yt-react-one-portfolio/main/src/assets/html.png",
            title: 'HTML',
            style: "shadow-orange-500"
        },
        {
            id: 2,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/css.png?raw=true",
            title: 'CSS',
            style: "shadow-blue-500"
        },
        {
            id: 3,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/javascript.png?raw=true",
            title: 'JavaScript',
            style: "shadow-yellow-500"
        },
        {
            id: 4,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/react.png?raw=true",
            title: 'React',
            style: "shadow-blue-600"
        },
        {
            id: 5,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/tailwind.png?raw=true",
            title: 'Tailwind',
            style: "shadow-sky-400"
        },
        {
            id: 6,
            src: "https://github.com/theyashpatel/yt-react-one-portfolio/blob/main/src/assets/node.png?raw=true",
            title: 'Node.js',
            style: "shadow-green-500"
        },
        {
            id: 7,
            src: "https://www.pngfind.com/pngs/m/128-1286693_flask-framework-logo-svg-hd-png-download.png",
            title: 'Flask',
            style: "shadow-gray-200"
        },
        {
            id: 8,
            src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOcAAADaCAMAAABqzqVhAAAA6lBMVEX39/cSJUr///8TxbsAADf7+/sAADn8/PsAADsAEkAAADQACD0KIEcAGkQPI0m5vMPy8/WWnKjDxco0QFwAF0KlqbPp6uxsc4VETmgADT4AHUXd3uKwtL0AFEHQ0tfT1doTzcG/wskSHUZ/hZWIjpwSEEEnNlZCTWdlbYGhpbBdZXpSW3J4f5ARDUCYnakaLFAWandNV2+DiZgtO1pTz8eE2dPs9fQZPVkWmZoUNFMAAC8Xsa0Xvrdp08yh4Nzc8O8TdoAUUmcWXW4Znp4bSGAXhIoXf4cXsq0TOVYXbnqw5OHL6+l719E6ysLrXSW7AAAX4UlEQVR4nO1dC3faOBbGimUb/MCAMbGNIQFCCKGhSebZdqZt2pnuzOz+/7+z1pWE3/iBSeicfOfsTvPC+qyrq/vSVav1ile84hWveMUrXvGKlwCWZRlFgDF+6SE1DIwDWqbXH9/NR6Pb+wCj0WYx7E7t4Afyv4MtllHL6y7WS19SnLal6y6Brlu+o0qqcD4fey30nc9sMI94crfeiqrvakIGDMO1VNFYD71AjF96tDURiKQ3XCtS2zWyKEbZuk7nceF9j0wxkqeLpeS4CUaaGwgsgaW7WpS/1hYHQ/M7oyojr7eU/KioupajSNZ2cDuaLwjmo9tHQZUcP5xtTbUe7O+HabAmx/diOySpWaqk3M+Hfc9EMWB7Ol7cS+ELMXxpZKOXJlAKGNkLX3UjHMVBoFIDVnLGBhIo40BT9a5Fh1O1OnPz9Jli5I2kNpdErS0tN127aIsMFJY9vBYt9mdtf3jiwhuwXEl8uIEMPvY8XG7IwQbkzR2H/qkhnXunPKXIHnV0xlKXtj2vkqmDkXnnMqauNDxZori1EC02lW1l1K+x8SN8YzGhl9amfIxRHgqMuoLDtwetZ6N6o0TmXKI6zNqeouwiey2yxaVuh60DRoi8a4m+LuXy5IiisaJTlo4wlg8TOIzuRNhkDPHEFqlsrukUCL5/hw9fVsh7bFOivVMiiiYG1T+auGlmi8d4RF+cuDgdouiuY9CF+ThtbFTohn7oycwoxiumNoIhNbgToL4Ci1S8eXmiGGPZHrSpXXAddx9xHNU/HHnUuu90X4AoMu0IPM/rb6me1c7tOLw4ahissm3ATipNn93YRb2OGIEkSSp3MzRJjEOKovNYY9PHtkE+XRPMZyaKFmJRBCQPWp29EHs+eZ5+/rySixZSTZYgfqNWZTWFpxIhqj7r7nIYzcCGWFaXXdQVyZ92Js9n0wdCSx5pOJICULkDpiopqAlwM6K67KKeQh4qHINR9gPpbGrucNKnoJ6mNOqn0U1gLlF1Ja0qyy66JQrdHz2T5HKalodgP5TRCCZJnSOcgpz8OrAM9Zqyi02IT4j9Z9G5TGg11WOPQzfwDWdVbtiyeQsaJdh+qsqufEmepC2fgyen6XOa8hS+Yd2WHjR3tgSxquyiFZEc5xkMXTSnQqt7u5e6hB18WeVDJlurluxiG0Ipin3sGUUbJT6bwXeIUWtIlR5NZFeoI7vojgRkrM2RJxRt6Gw6O5p40gEJrGphB4s6lF2a8S0lwjjYWKq+1crgNK1QaDFIbXtefTec7mT3sr9YD8434zKOuTxWyYRWf16VoTGhjaxN1HOqLk4ObK6Z3lVJRtS11PaihNOGIbPmmDWeWBKcZii0rZYNweTOpJYY7WSXwXAe7ULhpSvUGR5NcLnQ+hGaaOMTyaurFgLZjWe2XaF44ZkgQYNjCW6G0AZqnjhnhl8sRBjJgVveSrrYss3i2bPZDGRYvy4cPxoRe0r0jjOhnKYV/Xy0IapELQ7boOn80RGV7bobX4H4UgWW1tOnt9oMzN5x0fjlPpErv3cUt4ULrRp7jSaYYdvCkZmrjkUE1NClbT/6UujczD6fXVxcnL29Ip/2WPjS8NYgwZljCG64oUTfIuoRE0EdF7xZ7LGYLnxEJ2q0YTKd2teLM4KLp1kpgaRSJNp1yez75PTaDCATLVLoD2IWw+KIRCcxmMZXX84oPrwhmrTotQXWPHnp6mXjCzRt7NHnsYVSIEDo1qJ/fXU1o0RDY6pL5vOK0Ty7+DkQyHbxwoPl4jceQEkbe+z7sLg6BfIjT8Cd8X/+4/2Xt28glrXmI5THDlHXO55ftVI80XkgIO59wzxDoU0OgEQR3BUqwJpIbftToGjOLt7DjHb4Jin3yUe/+caJXgUf6NwUyiNaBLu2sT0WzcTz0Q1s2Oej/bj1QaMyVfPLFRgz7I1hjzgBs7fsh3+QX5WKbStq40qNKqIsY4/+oNuhClTfD9BBO1Vz8WswZdYDFzkEXsDVH4ToxRcynYZaPCY8lcq9kCo0ubGXEFp02RHK481uCX4OJFffRVjwEOyEN5+/fGOLt/1QYtnZJMCodpvjmbs2EURqyvP8EOMZRuyoWyfMrt5QZVzGhgyeDtGT5kx5tILXHTf24Ad9hYVsXdfV9oP8VvuXC0YU5ixUqfJUiaUvOqVieSDuzVl+nKaTnE15ypMr1u3q/nwvIFdo/Mqm8xOZCSkiccEbC60IrTMutVmggdbgBhrOZoomD8C766JdBVErbfb1Q2DCXvxJLB5BisqmbN+LEOY2XGlQMgmObt0DYgqJiDKnmdpQsBcWGhZrDezBSp75T5/+2vpCWtVg1B8Jkii5627ZkrGDeCJvEkV/Da6h1k7SlD1r5xy374rXCFqALjO4i6npSVUjI2zbdoW6YnStlXrHWZA37+IJIFg26Q0F23Q24f9K6Xa0diKaRhMz971K6Xz0WHt9svhkAq6QpkkZtu/Jf8rl0fEqzAm3jQbyeojUXbdv6nwQdR0S0IRkXCqgSQsFFn3y+yWdQDQ2FCvYYixVnTeReDfVsrKUAvbepfLwup6MSmFzCTSVDRoSYZRKPkpudTeD5XW5EG2JsRIjTamXNgvM8k68bKJznZpNcws01Q2SCU9DL/0oXD7kXvxZXWrH15MMucULZbwpgWcn1Tw2B5C6VAP7FBNvxSgMDR0FB/tl++uZOE1nFUzLMXiWraFC98fws8NRXEMApH1LRkN9QLU5nhjZgQyZpUT7OHETNo4WpenfwkhocKiT713QBVn2PWDzZgBK4X5cOKlsefaPU3eC78Fo88/Zl9TXzQtColZ3fj+4n3fLKVjU1aj1QYzcotQvjUuV8MfrQL6FGkXrvMWYmcSuyAsuohtXsUgOTNHvShitqNcJNzVX6u8napLKsDCY1igQozngNGnCNTs4h81ziY/bkK4LLQM0jNlixrtUxC326eP6VkIR5BWYqPogHDP4DG72Wx1YkWHry4IQAbbB0Bdmb1hQYX9BCTifgnJMmsvI1LBNLONxaO3Tcc9oXLqoEoWWHxn+n98+vIcci6AO8yeUKsCjJLTRCGxfdxm1QOjGkpENkfsdOjtPn57o/IgZMhY5hG7SnNk3CPr9Qjxx7TGfJ40H5yrA+sA85rc1Y8VdYGRmZEPoQCyaA3siU5uRlEWL83sOyPVesQjSxV8FySRMfJ+c9VKDm7mDTWdTMCbxsmibUHDXLfZbBPAviLHvcmAkvid0UnG0jejuQL1vHvn8drVfy9jESGjvEewqNO1bXl7piKLOFIqaKJKmWkZxyG8p8C34N3z/6j0fNpHDZOqQFVtFdeyWBwTPSNRhT9IM9rOGCojQtS+URXZV9dVu2CQAnwivoId09a7Bf//M3x+DBnVrNGMNme9K08zBjPOkub4YT16krFsUscwEzcCI+XEKDOXGhtpEpRRWs2epPHYB+A+QA4suJ9RjRcqrOcWabCvazxfh/BvansGhNVlIbp2SpRTP8TtnB748XScJK/P7UGk4+8T00J8QmI6EvlgVqyFNdhsLbPyzJ6Kg3/+H6K29y4/VMlpNqFzkDXdgZ4zc0XiYwBw07ijx3Rso2KL7xMUXIoVGO5xOTlMMjVh8ySO8T1/fQLnG/hoFmaaw1CZMhUgdNJMzwZ0myqVl7NJEbyK+fQP70NXTl29fniAHFqmXRWNqyorR85zMgDJmM1ZSXlAKgB7gCU0fldwtqFTSDFIKStJ8xUI8B6Zpu99AYxrhFBPHVpdRg1gtlEh0D5Zi8lMOBS+IVxNE8SUxCVJ1NfIkdoQnEFH+CzybmEwXYfN+5+BoneK9EZtgQxlKw9Yf2/A0dZogSqoY3ZSZji6lSA4sLM1luWFDTGfF0HArtXXdaouDMpMke1A/qWkN1+Fyok6cKKt7Sz0Medc0BxY4zeFBUDRhKihrXcm4vxiNNnfTcqEWeQKeuftYh80e8LL4uOhSH8lJJwCwfLn2FUlxIgV9aEJlM+8UJ1RVl26ygIa0XKf86YOSn8uJxiwVmZh9mTWipH+HZ8vh7Mj0fJjQuWtmZExpqE2XynPRbUdnFJztvGxSLBzLE/RiQzSJV+yU2YSqf+4DP9EREqVJ3BLOvcxO5EoNRl3xOZhqGVqt6A/lNCI/RnNeghsxb0gJWnGMUfZ0SrNebjZnuCzbU/UEIZqM04jq0ozqVBo9KSpxwTbtfCY1G9XBNrw9I7mv7wead5zkIcbAg44tx01adPU8TRRCtml1TXmdUTLTwha9tq2QVMV2ptMZL6phEbHIjKIHKPrdV4OGbZZNLHmgUUb2ZDIpVa7ALA/9ugLPSXaFl6ZMoib3KHFSh5Yi7ouOY5vmhkueJ8Stm0FHkiTxeliibQhzf/wKTprJjTUjAPyXfSnFiLJKuC1fuBCvNvLjjNh8pNnEckNBXYtV7WjqdlL8J2wXEMtXV+PJo0VCGTqcLg7+JfiSnkWUBnO3LNnN4sZ5S4/TpNnE4mFHMy3avi1jFwCGrFKVdIuMwhAl+W/LnI5o6U9cdGmZjMtrNKDIxRCzLWrcOqfZxPtyNMfxqpfcg064NR6tVrerAFD4ohWfe9kD7mPnEYVByGPyMrJtBZ40te7LPc8G/WmEmRY35xc9QSK1veR/IOVpp6ka+Mn6uOjSdEsguiiwJDAtFlbsDDOD0dSuWxkmSBrU/yGZlrP3f0Gmxck2E/Ey0cNSLa42r0FU5kS7cKR+5MIKSR21H48pTcHqZhzEzwCNuMzeh6ElbZmlc+V+Ym9wD282wIkmRJc2eXLCCjnBTTVPUHf1jk66r0IW4EN3mZY/czMt+AZ+02Wl6Za0bcDf5ms0Lro073sEGAIPzMOxnczIPBS7BGuSHTWYdxtpDZwtusciugtYn134eZkWupep3V0P0ryh45/qEI2JLr51CkZcD8Z/djyzUlAUcJyysDAVf/zhx0oTnU109a7DIdIlKnYOAz38wFJtVBFJmVV8EMIvODKIP/52dlaNZ84aDXPSmFRoCUqipW1lgDjy1ClkWtLRYfpoemRwn/NAWFbmmU008qldWgNyYLIO6qSF2WdSS//tZ6Ju9WzjX6bVorlZNfzTb/Rd/V5VQWWKbgioMdAP7STDMy1Xn9/STIvwLts/wBMpd+0Slv9lS/y36mPYP6NopRNDpvrHJj6GZVo0lmnJ7R5lkuBh9gkW/NOPnOXHOtvNXqI0fqJcHpxlHkQz6U6u1SoTRZTlJB3KslUgunD29PCyAWzeSru2ceIoP3tP5Ce9eEOWP9Rl2dpPFLLMe/PQZR8y3ortwJhri8s9mRbwOpP6ALeaYNnaK7q8WPRwA0xGk7uiTIuMzlMnO3Dr90Mldocd0XRJJbSpaKYcDe/PtGDU6o/8hL4NWR44lxRcdMUUUapxtWfo9GQ/uDSgEx4Nj7D8p5lMIZ/RFFHcPeCQbQV/Aw0ln4aQLK6GMP67YZatCNGkloDy3zpV6zKyPXLJTNlAGVPHus6n8wgsW5kVI/T7RHC1ZVWesnk3UEVJEkYlopgtPGU0dZGfrsG/HYNlK0I0PqNU41btI7OL1xq6uC5OH9AopuGI60uuqPAPQPN/PzXfH+Omk0UUbNzC9hiJj1pE4rVW6nBiCnhJysW24+j5j78b205So8skCu+6WiAV3cUCWlrqQFsSpgsxhrggtQ429XLHlyW6MhXcCiEpmpwRjNnVG3pFi14UhgWeqdO1DRi1OdjNaEQZYSgBdvZWaSVKx6Ak0bj69P7bL18hXisW1JvKJPif4ZSGTP/b7DrdER0HX5i2SXQ8uMnaNYkA2JF67Nxe1faQNnqllfGfCNGiPAm1RoSswo+d09ksUya6guoahutbvkCSbFDTYwVmkW/tEEsbK7GSbIikvfkSLTFX9j+VBRKyjz4fh2lAlKYPaRrR4OlE+KdQGmF8j8a99u9L2IZ0a04qdRcuOfuxQaZo3KnAJw+zJ84T4tJFJ77hTGT+Ls3CX80yTWbx6vH8zHl+K8NTHu9Ntx6HaUDUcdoh2E1sOnzBS03DeutkjYcC2THeNou1HyralmQ4B7KvPB5//GHHtCmi0+Gwt8PNGPYJfXNHvlqw8uQ1r8OOVOt0LwkmD9CD6S86oR+gE2qWKo0/EvpO+nsdXfwPZ/qxIaJYjmQ9gy8saGyAIJlJk3eGxtpYR9Oj9N8YCrKFN5+gMv5XaLxa7O+AX1TUlgz/8z86o8c5QB47RIjGtMNzfpEsuqMJT+Pt269XtMSo2JqiLVoLIxeU6bF49qKHCJmr6j7m+iEsLx1WxpepcjShtLe4PRhheiSe8mXMxGXFrPllTNhWowl4pVRAn7aBLOPR479/Lz30arDjp5lZJUN+GRP2ls6uMl4sGf4FB7CJGGp9ICN+mhnf0xb6uQxwa+GoluvqvjgoOJcdPgRq7ZSjnFwuCbCzI6czcYv2lthTd4vM8eb2frWYlG9CAFW/B2etDoEMiihyvpodwdh7t5FcqdVCi1T9apWaqzQPGiRSIrpQtpu/2whTr+VILY1LjcBLRXEx65omNXdxCnvK4dm5A0C7gcfqzdnxnFTrygMg7D/0e3xAhUSiEoT5NZrV3Okh98V5jvT0cXh0B/aCuyxf3733pjME5kijjUSrgircbULnoAcocLXOS40MB8rXm06mnimTrjdy4tJiGU2ob3bEOwEKQRVu6loCdqimDRONyehzZwuRXmLQvEsUle35an437ns23hXf2F16vWhe8OR5QCtB0iofQb9fYhhheXoz3yy62beAy+aDI+0aIRqGplttR5EUVbhebR4eNmtBYibxsTrll4RNe7GlVQQ3jLqPomNZviqtMxoNoa7fzg46EcbkcD7/aeeFLz41tWxVyE8P+bxY1dDTF13GyuP3we289N2RsLFk9d2U6emh6BSJCWeZBb+DV9CGJlqK4+tamnjwhq6bu160JiDwmBmPk71dT1+NjV6MzTv26Gy2rdVNf+p50/64t7o2JEl1fMvSSS8UIvCiMeq//CXpaJNZ2QM/6tNS1tnVz5+FKwhuxxQzjc0aas9EssxCSgi17OnluPewGa0DbOa9rpe69uMlAEdCc0pGof+n4EOd4heDtnCO5KGglamhpkSS8mWQG6mdPhzyXTvDUADQPWdGA9MXH0g6JdpRiRWblvW2XxjspGTWYGVSvm/4H3hcOnntxjbz9P6Jgt5l0MmsgiYTtisjph2VQiOVRgkOruF9LuCJIuQ0xgUbP5I3SvDsNn+bwRFBGzVmGmVobpEW65zne+C5yxtRD8D4TsSWiV9mTIOGO3hLrYu3M1L7GfY+IW/hu1merEohM71HX4Hx61mkg11YnkJLTY99c2CD6Ah5PjA9na8Jv3w4+/YXtMxXQoMI+uEd/YbEBkF4KtkVBKzDSds3eIfJyPb57+HJWzDsjkR3IuL9b+LZQqtISzst0VXqX8Qz8DBZ+ayhKcuYJUsdgJdMJlTEXp4t5M0NUVUVZTCMW+Tf2b5CT3jsiTli1PK63X4qPEQdnYPOkz8n9uyf4e/gjBYQexydUwTLfVQPxoGjY1jfDc9Jrn1b8IeXDXekPy4w+GVi9Vg5/UPlu/FXwL3qVBc/dgvHy0afywPTizxqLDM719E5RUAJUYlbWdMwXzwJVgUQHKm33ZMI4BGuLz0OoPStlvkGd/C9aPK2CurfRQXl9Ue8ALxZ0BMmdUYLklDmRrRTALZrl4JA4KTm7WvPDrrbS3adNhHEYfkuAkQYYbyAYvBBHUAvPlrCIDd0NdYxgNFk86j4LPFXA/QvFaWjWINTSP1lQ7bvO1Yik1sLBpQliGUvyXxm4GlbL+ZQAZGGzyeEyKWgTcHI7Wr3gkDX9B7NdroVaQ3QU5Jaw1eBNwDWacZf9rpN4O4aDkKota6+PCagjlpob3DicoCakFGPEK3l9hwXGrTBbe71034pJxddgHMO9W5YzQZNi5+aN8py7g36jiyKcmI8aXC63WAtGn75EtssYFIrom2bq+2h7YNPbn2ybru3JkqcDKwHRK9YKejv/QLA9BCkrs/JSc+73mG4WzxChZxyesEFdE97PFtwRdKhoEdetMeTo9nCdiO+Ssy+PclYruwZVvHYK0BXmjvY0ySwvRLbTc2pZom3Dd+V0xyQt7iWxCagDB7KHx98fpDDFy3zcOBqxwdf8YpXvOIVr3jFK15RjP8DOO8iLspsG9oAAAAASUVORK5CYII=",
            title: 'Machine Learning',
            style: "shadow-gray-200"
        },
        
    ];

  return (
    <div name='skills' className='bg-gradient-to-b from-black to-gray-800 w-full md:h-screen'>
      <div className='max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white'>
        <div>
            <p className='text-4xl font-bold border-b-4 border-gray-500 p-2 inline text-emerald-300'>Skills</p>
            <p className='py-6'>These are the Technologies I've worked with..!!</p>
        </div>
        <div className='w-full grid grid-cols-2 md:grid-cols-4 gap-8 px-12 py-8 text-center sm:px-0'>
            {texts.map(({id, src, title, style}) => (
                <div key={id} className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}` }>
                    <img src={src} alt="" className='w-20 mx-auto'/>
                    <p className='mt-4'>{title}</p>
                </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
