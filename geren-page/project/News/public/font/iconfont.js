;(function(window) {

var svgSprite = '<svg>' +
  ''+
    '<symbol id="icon-sousuo" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M916.00896 895.256576 623.127552 602.513408c105.206784-116.016128 102.151168-295.799808-9.807872-407.706624-55.927808-55.9104-130.2784-86.69696-209.378304-86.69696s-153.450496 30.78656-209.378304 86.69696c-115.429376 115.377152-115.429376 303.172608 0 418.54976 55.927808 55.9104 130.2784 86.69696 209.378304 86.69696 74.17856 0 143.988736-27.368448 198.535168-76.872704l292.846592 292.708352L916.00896 895.256576zM215.248896 592.722944c-104.03328-103.998464-104.03328-273.24928 0-377.247744 50.419712-50.384896 117.414912-78.133248 188.709888-78.133248s138.290176 27.748352 188.709888 78.133248c104.050688 103.998464 104.050688 273.24928 0 377.247744-50.419712 50.384896-117.414912 78.133248-188.709888 78.133248C332.663808 670.83776 265.6512 643.090432 215.248896 592.722944z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-22" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M512 176.75 65 176.75l0 670.5 4.118 0 52.688 0L512 847.25l390.194 0 52.688 0L959 847.25l0-670.5L512 176.75zM883.395 206.55 512 553.192 140.606 206.55 883.395 206.55zM883.395 817.449 140.606 817.449l283.595-264.693-21.841-20.371L96.925 817.449 94.8 817.449 94.8 206.55l2.125 0L512 593.949 927.076 206.55l2.124 0 0 610.899-2.124 0L621.641 532.385 599.8 552.756 883.395 817.449z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-pinglun" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M286.3134 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.14775 58.263985 56.165184 58.263985 31.017434 0 56.165184-26.079982 56.165184-58.263985C342.478584 403.021983 317.330834 376.940978 286.3134 376.940978zM510.976182 376.940978c-31.017434 0-56.165184 26.079982-56.165184 58.262962 0 32.184003 25.148773 58.263985 56.165184 58.263985s56.165184-26.079982 56.165184-58.263985C567.141366 403.021983 541.992593 376.940978 510.976182 376.940978zM735.638965 376.940978c-31.017434 0-56.166207 26.079982-56.166207 58.262962 0 32.184003 25.148773 58.263985 56.166207 58.263985s56.165184-26.079982 56.165184-58.263985C791.804149 403.021983 766.655376 376.940978 735.638965 376.940978zM847.968309 85.637426 173.982008 85.637426c-62.034868 0-112.330368 52.175313-112.330368 116.526947l0 436.95584c0 64.352657 51.421136 123.670647 114.88147 123.670647l171.183777 0c29.837562 31.785937 153.332201 159.63986 153.332201 159.63986 5.483898 5.703909 14.370289 5.703909 19.854187 0 0 0 90.418312-102.513792 149.328004-159.63986L845.41823 762.79086c63.461357 0 114.882494-59.319014 114.882494-123.670647L960.300724 202.164373C960.300724 137.812739 910.004201 85.637426 847.968309 85.637426zM904.13554 639.120212c0 32.1707-26.986631 65.929572-58.71731 65.929572L673.137469 705.049784c-20.869307 0-39.628556 21.459754-39.628556 21.459754L512.538771 851.977112l-120.942513-125.467573c0 0-23.037692-21.459754-42.782386-21.459754L176.533111 705.049784c-31.730679 0-58.716286-33.758871-58.716286-65.929572L117.816824 202.164373c0-32.18298 25.14775-58.265008 56.165184-58.265008l673.986301 0c31.017434 0 56.167231 26.082028 56.167231 58.265008L904.13554 639.120212z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-wujiaoxing" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M 1020.86 386.08 c -8.36987 -27.9604 -32.7528 -49.1824 -72.471 -63.0748 c -0.524287 -0.190756 -1.03921 -0.349915 -1.56818 -0.49269 l -215.665 -58.5212 c -46.7634 -71.3171 -93.5888 -142.611 -140.404 -213.92 c -0.195437 -0.278528 -0.621421 -0.930376 -0.814518 -1.2089 c -22.5291 -31.5052 -50.6054 -48.8629 -79.0328 -48.8629 c -20.5502 0 -50.6792 8.86139 -77.8122 51.4387 L 312.979 246.546 C 259.19 262.846 205.41 279.219 151.591 295.585 l -78.6501 23.9241 c -36.6322 11.8995 -59.7746 31.1553 -68.787 57.2421 c -9.45356 27.4057 -2.80985 59.3638 20.3407 97.7035 c 0.560566 0.938568 1.17262 1.82915 1.83852 2.67176 c 47.0548 59.5382 94.0885 119.141 141.144 178.814 c -2.4143 85.9796 -4.86487 172.056 -7.36109 258.125 c -3.58692 41.2104 2.37568 70.251 18.2038 88.7789 c 11.9931 14.0434 28.672 21.1564 49.5744 21.1564 c 16.0142 0 35.0102 -4.18143 60.6406 -13.5039 l 207.675 -84.5261 c 78.3587 29.2267 156.806 58.3714 236.204 87.8263 c 15.4992 4.99126 29.8469 7.51791 42.6627 7.51791 c 29.2197 0 78.8304 -13.4407 82.7918 -103.489 c 0.036279 -0.923354 0.036279 -1.83735 -0.023406 -2.75953 c -4.34293 -76.7379 -8.73617 -153.308 -13.1236 -229.919 l -0.059685 -1.00879 l 152.96 -205.686 C 1021.22 444.499 1029.04 413.404 1020.86 386.08 L 1020.86 386.08 Z M 959.155 447.193 l -158.205 212.711 c -3.69927 4.97488 -5.54598 11.2148 -5.17851 17.5496 l 0.612059 10.8322 c 4.36399 76.1258 8.735 152.22 13.0545 228.472 c -2.6741 53.0607 -23.2629 53.0607 -34.3677 53.0607 c -8.05507 0 -17.6877 -1.78 -27.6644 -4.96669 c -81.2365 -30.1699 -162.427 -60.3258 -243.55 -90.5987 c -5.41725 -2.0047 -11.2979 -1.91693 -16.6567 0.24576 L 272.082 962.084 c -19.3401 7.01937 -33.799 10.4272 -44.1864 10.4272 c -10.0738 0 -12.7409 -3.13168 -13.7508 -4.29962 c -2.78762 -3.26626 -8.93629 -14.6882 -5.75195 -50.0882 c 0.044471 -0.548863 0.08192 -1.10475 0.095963 -1.66063 c 2.59452 -89.6379 5.15042 -179.259 7.65951 -268.777 c 0.172032 -6.31134 -1.83852 -12.4705 -5.65716 -17.3108 C 161.806 568.598 113.122 506.92 64.4304 445.292 c -13.3916 -22.5397 -18.5256 -40.0811 -14.8181 -50.788 c 4.3558 -12.6379 22.7761 -20.9738 37.05 -25.6082 l 78.2464 -23.7954 c 56.712 -17.2535 113.354 -34.4859 170.02 -51.6622 c 5.59747 -1.6934 10.4319 -5.48395 13.6069 -10.6578 L 473.375 79.996 c 8.27976 -12.996 21.5215 -28.5023 37.5275 -28.5023 c 12.9433 0 27.3297 10.151 40.1525 28.081 c 48.5352 73.9081 97.0704 147.801 145.539 221.726 c 3.31776 5.06265 8.23529 8.69404 13.862 10.2201 l 223.561 60.6675 c 23.0019 8.16156 37.4456 18.6298 40.7107 29.5111 C 977.836 412.103 972.135 428.483 959.155 447.193 L 959.155 447.193 Z M 959.155 447.193"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-shezhi" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M960.497058 415.079352l-82.124278-18.22684c-6.396944-20.47482-14.77287-40.075648-24.397786-58.928482l44.446609-74.024349c16.577854-26.521767 24.947781-65.525424 0-90.521204l-45.298602-45.249602c-12.222893-12.249892-28.628748-17.413847-45.147603-17.413847-17.175849 0-34.502697 5.572951-47.481583 14.583872l-72.019367 45.902597c-18.695836-9.700915-38.221664-18.000842-58.524486-24.575784l-18.453838-83.121269C606.000174 33.00471 579.349408 0 543.999719 0l-63.972438 0C444.677592 0 423.028782 33.500706 416.000844 64.005437l-20.52882 82.124278c-21.692809 6.924939-42.495627 15.747862-62.323452 26.19777L259.302221 125.298899c-12.972886-9.010921-30.304734-14.583872-47.475583-14.583872-16.523855 0-32.897711 5.157955-45.147603 17.413847l-45.249602 45.249602c-25.00178 24.99678-16.620854 63.999438 0 90.521204l46.748589 77.926315c-8.768923 17.671845-16.545855 35.925684-22.543802 55.020516l-82.130278 18.22684C33.00421 420.571304 0.0045 447.222069 0.0045 482.571759l0 64.005437c0 35.349689 33.500706 56.998499 63.999438 63.999438l83.170269 20.775817c5.750949 17.623845 12.902887 34.573696 21.050815 50.973552l-46.801589 78.001314c-16.599854 26.499767-24.97478 65.503424 0 90.499205l45.276602 45.249602c12.222893 12.260892 28.623748 17.423847 45.152603 17.423847 17.170849 0 34.503697-5.572951 47.475583-14.572872l74.00235-47.173585c19.945825 10.519908 40.873641 19.444829 62.695449 26.348768l20.47482 81.89828c7.000938 30.498732 28.650748 63.999438 63.999438 63.999438l63.999438 0c35.349689 0 62.000455-32.99971 67.502407-63.504442l18.469838-83.321268c20.096823-6.499943 39.375654-14.702871 57.850492-24.273787l72.170366 46.025595c12.977886 8.999921 30.304734 14.572872 47.481583 14.572872 16.518855 0 32.923711-5.162955 45.147603-17.423847l45.298602-45.249602c24.947781-24.99678 16.577854-63.999438 0-90.499205l-44.500609-74.126348c8.945921-17.574846 16.701853-35.850685 22.926798-54.848518L959.996063 610.575634c30.498732-7.000938 63.999438-28.650748 63.999438-63.999438l0-64.004437C1024.0005 447.228069 991.02279 420.576304 960.497058 415.079352zM972.79595 546.577196c0 2.532978-9.425917 10.681906-25.195779 14.324874l-83.148269 20.775817-27.453759 6.86094-8.795923 26.876764c-5.178954 15.785861-11.877896 31.781721-19.902825 47.551582l-12.874887 25.276778 14.599872 24.311786 45.001604 74.924341c8.072929 12.923886 8.951921 25.389777 7.221937 27.124762l-45.373601 45.314602c-2.203981 2.214981-7.377935 2.387979-8.897922 2.387979-6.326944 0-13.527881-2.133981-18.323839-5.459952l-0.797993-0.549995-0.829993-0.538995-72.170366-46.020596-24.877781-15.860861-26.19777 13.570881c-16.475855 8.541925-33.301707 15.602863-50.05156 21.029815l-27.895755 9.015921-6.326944 28.606749-18.474838 83.326268-0.220998 1.001991-0.177998 1.001991c-1.918983 10.611907-11.570898 21.390812-17.12185 21.390812l-63.999438 0c-2.527978 0-10.697906-9.415917-14.324874-25.217778l-20.47482-81.89828-6.946939-27.776756-27.29776-8.628924c-18.20584-5.760949-36.45468-13.435882-54.228523-22.823799l-26.321769-13.882878-25.098779 15.995859-74.00235 47.173585-0.824993 0.522995-0.797993 0.565995c-4.801958 3.324971-11.996895 5.459952-18.323839 5.459952-1.524987 0-6.698941-0.171998-8.951921-2.435979l-45.249602-45.228602c-1.799984-1.788984-0.926992-14.222875 7.674933-27.976754l46.796589-78.001314 14.427873-24.020789-12.47689-25.098779c-7.550934-15.165867-13.500881-29.57174-18.22184-44.058613l-8.778923-26.941763-27.496758-6.86094-84.129261-21.012815C60.629967 557.259102 51.20405 549.110174 51.20405 546.576196l0-64.005437c0-5.534951 10.773905-15.197866 21.379812-17.11185l1.023991-0.187998 1.001991-0.209998 82.124278-18.22184 28.876746-6.413944 8.876922-28.229752c4.726958-15.025868 11.123902-30.600731 19.547828-47.610582l12.47689-25.08778-14.427873-24.009789-47.276584-78.772308c-8.072929-12.912887-8.973921-25.335777-7.172937-27.141761l45.249602-45.249602c2.171981-2.171981 7.000938-2.408979 8.951921-2.408979 6.353944 0 13.500881 2.138981 18.275839 5.437952l0.824993 0.587995 0.872992 0.543995 73.857351 47.028587 25.07178 15.96386 26.300769-13.861878c17.477846-9.215919 35.650687-16.852852 54.023525-22.7168l27.178761-8.676924 6.925939-27.685757 20.749818-83.05127C469.340375 60.625467 477.516303 51.19955 480.043281 51.19955l63.972438 0c5.550951 0 15.197866 10.773905 17.127849 21.385812l0.171998 1.012991 0.225998 1.001991 18.447838 83.127269 6.326944 28.585749 27.874755 9.026921c17.02485 5.513952 34.072701 12.675889 50.725554 21.309813l26.19777 13.586881 24.898781-15.860861 72.024367-45.902597 0.829993-0.533995 0.824993-0.576995c4.769958-3.313971 11.969895-5.448952 18.296839-5.448952 1.551986 0 6.693941 0.171998 8.972921 2.435979l45.222603 45.184603c1.805984 1.805984 0.926992 14.276875-7.647933 27.998754l-44.452609 74.029349-14.626871 24.349786 12.923886 25.297778c9.04892 17.709844 15.95286 34.373698 21.126814 50.908553l8.849922 28.283751 28.919746 6.429943 82.130278 18.22184 1.001991 0.220998 1.023991 0.177998c10.595907 1.912983 21.374812 11.565898 21.374812 17.11185l0 64.011437L972.79595 546.576196z"  ></path>'+
      ''+
      '<path d="M511.987 307.010302c-113.189005 0-205.306196 91.966192-205.306196 204.988198 0 113.017007 92.11619 204.988198 205.306196 204.988198 113.211005 0 205.333195-91.966192 205.333195-204.988198C717.324195 398.975493 625.197005 307.010302 511.987 307.010302zM512.444996 666.934138c-85.34725 0-154.811639-69.249391-154.811639-154.364643s69.464389-154.364643 154.811639-154.364643c85.38025 0 154.838639 69.249391 154.838639 154.364643S597.824246 666.934138 512.444996 666.934138z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-youjiandakai" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M899.177622 957.581288 135.32457 957.581288c-15.692401 0-28.472472-12.751419-28.472472-28.445866L106.852098 452.491675c2.178619-26.634614 11.205203-26.765597 26.478048-43.482327-16.795525 19.051915 292.587801-271.096325 362.809119-334.152453 9.080819-8.16189 17.635659-8.423857 17.635659-8.423857s9.209756-0.76134 19.49603 8.686846c10.286274 9.44614 381.677862 347.746052 381.677862 347.746052s16.164145 10.549264 12.674671 29.626761l0 476.643748C927.623487 944.829869 914.870022 957.581288 899.177622 957.581288zM132.988362 932.652526l768.524444 0 0-483.675908L514.404258 95.847975 132.988362 448.976618 132.988362 932.652526z"  ></path>'+
      ''+
      '<path d="M890.624828 957.581288 143.669632 957.581288c-5.564739 0-10.969842-1.574868-15.562441-4.670369l-15.770172-10.522658L379.418914 680.133302l137.714502 135.222751L654.871453 680.133302l267.215948 262.359336-15.97995 10.444886C901.487224 956.030979 896.135332 957.581288 890.624828 957.581288zM379.341143 716.058512 160.516322 930.290735l712.63146-0.657986-218.194464-213.574237L538.282085 833.277214c-11.256368 11.231809-30.464849 11.231809-41.72224 0L379.341143 716.058512z"  ></path>'+
      ''+
      '<path d="M517.186627 843.695494c-7.740288 0-15.062044-3.045359-20.572548-8.55484L109.661074 448.188672l14.852266-10.968819c4.854565-3.594875 10.57587-5.432733 16.610306-5.432733L510.703983 80.471776 893.273145 431.78712c6.063089 0 11.757788 1.837858 16.612353 5.432733l14.853289 10.968819L537.784758 835.139631C532.274254 840.650135 524.954545 843.695494 517.186627 843.695494zM137.869532 438.742533l379.317095 378.029776 380.888893-378.029776L510.703983 80.471776 137.869532 438.742533z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-jiahao" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M548.939819 61.373813l-74.704422 0 0 410.868695L63.368748 472.242508l0 74.702376 410.867672 0 0 410.863578 74.704422 0L548.940842 546.945907l410.7899 0 0-74.702376L548.939819 472.243531 548.939819 61.373813 548.939819 61.373813zM548.939819 61.373813"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-ren" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M932.767349 1018.692029c-18.154595 0-32.929829-14.775234-32.929829-32.929829 0-203.306211-176.069267-368.710032-392.485783-368.710032-3.097495 0-6.198021 0.03637-9.283393 0.103048-2.394346 0.544537-4.849308 0.8163-7.320434 0.8163-3.025766 0-6.051532-0.046473-9.057092-0.138407C275.95086 630.362506 114.846758 791.887891 114.846758 985.762199c0 18.154595-14.772203 32.929829-32.926799 32.929829-18.157626 0-32.929829-14.775234-32.929829-32.929829 0-94.376619 31.504335-184.200949 91.106367-259.754172 52.487693-66.5325 125.220235-118.202883 206.743158-147.299739C257.182019 525.588164 202.462634 426.580457 202.462634 314.468506c0-164.301614 135.759397-297.970757 302.630134-297.970757 166.832346 0 302.563456 133.668133 302.563456 297.970757 0 77.942517-30.402128 151.67725-85.607454 207.627146-6.26773 6.319254-14.589344 9.786509-23.446402 9.786509-8.707538 0-16.917012-3.370269-23.118064-9.488479-6.262679-6.167713-9.750139-14.417598-9.806714-23.220101-0.056575-8.784319 3.313694-17.073604 9.478376-23.333252 42.962845-43.497279 66.619384-100.794879 66.619384-161.350608 0-127.986361-106.186703-232.111098-236.705817-232.111098-130.557505 0-236.773506 104.123727-236.773506 232.111098 0 130.054389 91.329637 232.034318 212.522926 237.428162 8.782298-0.477859 17.708055-0.719314 26.538846-0.719314 252.731769 0 458.33938 194.943176 458.33938 434.56464C965.697179 1003.916795 950.922955 1018.692029 932.767349 1018.692029z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
    '<symbol id="icon-dacha" viewBox="0 0 1024 1024">'+
      ''+
      '<path d="M410.624 627.712l-14.336-14.336 217.088-217.088 14.336 14.336L410.624 627.712zM613.376 627.712 396.288 410.624l14.336-14.336 217.088 217.088L613.376 627.712z"  ></path>'+
      ''+
    '</symbol>'+
  ''+
'</svg>'
var script = function() {
    var scripts = document.getElementsByTagName('script')
    return scripts[scripts.length - 1]
  }()
var shouldInjectCss = script.getAttribute("data-injectcss")

/**
 * document ready
 */
var ready = function(fn){
  if(document.addEventListener){
      document.addEventListener("DOMContentLoaded",function(){
          document.removeEventListener("DOMContentLoaded",arguments.callee,false)
          fn()
      },false)
  }else if(document.attachEvent){
     IEContentLoaded (window, fn)
  }

  function IEContentLoaded (w, fn) {
      var d = w.document, done = false,
      // only fire once
      init = function () {
          if (!done) {
              done = true
              fn()
          }
      }
      // polling for no errors
      ;(function () {
          try {
              // throws errors until after ondocumentready
              d.documentElement.doScroll('left')
          } catch (e) {
              setTimeout(arguments.callee, 50)
              return
          }
          // no errors, fire

          init()
      })()
      // trying to always fire before onload
      d.onreadystatechange = function() {
          if (d.readyState == 'complete') {
              d.onreadystatechange = null
              init()
          }
      }
  }
}

/**
 * Insert el before target
 *
 * @param {Element} el
 * @param {Element} target
 */

var before = function (el, target) {
  target.parentNode.insertBefore(el, target)
}

/**
 * Prepend el to target
 *
 * @param {Element} el
 * @param {Element} target
 */

var prepend = function (el, target) {
  if (target.firstChild) {
    before(el, target.firstChild)
  } else {
    target.appendChild(el)
  }
}

function appendSvg(){
  var div,svg

  div = document.createElement('div')
  div.innerHTML = svgSprite
  svg = div.getElementsByTagName('svg')[0]
  if (svg) {
    svg.setAttribute('aria-hidden', 'true')
    svg.style.position = 'absolute'
    svg.style.width = 0
    svg.style.height = 0
    svg.style.overflow = 'hidden'
    prepend(svg,document.body)
  }
}

if(shouldInjectCss && !window.__iconfont__svg__cssinject__){
  window.__iconfont__svg__cssinject__ = true
  try{
    document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
  }catch(e){
    console && console.log(e)
  }
}

ready(appendSvg)


})(window)
