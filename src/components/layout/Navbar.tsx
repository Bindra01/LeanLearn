import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/images/Logo.png';

interface NavbarProps {
  onTeacherSignup?: () => void;
  onStudentSignup?: () => void;
}

const TeacherIcon: React.FC<{ className?: string }> = () => (
    <svg width="204" height="53" viewBox="0 0 204 53" fill="none" xmlns="http://www.w3.org/2000/svg">
    <mask id="path-1-outside-1_64_2771" maskUnits="userSpaceOnUse" x="0" y="0" width="204" height="53" fill="black">
    <rect fill="white" width="204" height="53"/>
    <path d="M1 9C1 4.58172 4.58172 1 9 1H195C199.418 1 203 4.58172 203 9V41C203 45.4183 199.418 49 195 49H9C4.58172 49 1 45.4183 1 41V9Z"/>
    </mask>
    <path d="M1 9C1 4.58172 4.58172 1 9 1H195C199.418 1 203 4.58172 203 9V41C203 45.4183 199.418 49 195 49H9C4.58172 49 1 45.4183 1 41V9Z" fill="#101113"/>
    <path d="M0 9C0 4.02944 4.02944 0 9 0H195C199.971 0 204 4.02944 204 9H202C202 5.13401 198.866 2 195 2H9C5.13401 2 2 5.13401 2 9H0ZM204 44C204 48.9706 199.971 53 195 53H9C4.02944 53 0 48.9706 0 44L2 41C2 43.2091 5.13401 45 9 45H195C198.866 45 202 43.2091 202 41L204 44ZM9 53C4.02944 53 0 48.9706 0 44V9C0 4.02944 4.02944 0 9 0V2C5.13401 2 2 5.13401 2 9V41C2 43.2091 5.13401 45 9 45V53ZM195 0C199.971 0 204 4.02944 204 9V44C204 48.9706 199.971 53 195 53V45C198.866 45 202 43.2091 202 41V9C202 5.13401 198.866 2 195 2V0Z" fill="#3A3B3D" mask="url(#path-1-outside-1_64_2771)"/>
    <path d="M38.072 30.144C37.5813 30.144 37.1013 30.1067 36.632 30.032C36.1627 29.9573 35.72 29.8453 35.304 29.696C34.888 29.536 34.5147 29.344 34.184 29.12C34.024 29.0027 33.912 28.8693 33.848 28.72C33.7947 28.5707 33.7787 28.4267 33.8 28.288C33.832 28.1387 33.896 28.0107 33.992 27.904C34.088 27.7973 34.2053 27.7333 34.344 27.712C34.4827 27.68 34.6373 27.7227 34.808 27.84C35.288 28.1493 35.7947 28.3787 36.328 28.528C36.8613 28.6667 37.4427 28.736 38.072 28.736C38.9787 28.736 39.6453 28.576 40.072 28.256C40.5093 27.9253 40.728 27.4987 40.728 26.976C40.728 26.5493 40.5733 26.2133 40.264 25.968C39.9547 25.712 39.4373 25.5093 38.712 25.36L37 25.008C35.9867 24.7947 35.2293 24.4427 34.728 23.952C34.2373 23.4613 33.992 22.8 33.992 21.968C33.992 21.4667 34.0933 21.008 34.296 20.592C34.5093 20.176 34.8027 19.8187 35.176 19.52C35.5493 19.2107 35.9973 18.976 36.52 18.816C37.0427 18.656 37.6133 18.576 38.232 18.576C38.8933 18.576 39.512 18.6613 40.088 18.832C40.6747 19.0027 41.1973 19.264 41.656 19.616C41.7947 19.712 41.8853 19.8347 41.928 19.984C41.9813 20.1227 41.992 20.2613 41.96 20.4C41.9387 20.5387 41.88 20.656 41.784 20.752C41.688 20.848 41.5653 20.9067 41.416 20.928C41.2667 20.9387 41.1013 20.8853 40.92 20.768C40.504 20.4907 40.0773 20.2933 39.64 20.176C39.2133 20.048 38.7387 19.984 38.216 19.984C37.6933 19.984 37.2347 20.064 36.84 20.224C36.456 20.384 36.1573 20.608 35.944 20.896C35.7413 21.184 35.64 21.5253 35.64 21.92C35.64 22.368 35.784 22.7253 36.072 22.992C36.36 23.2587 36.84 23.4613 37.512 23.6L39.208 23.952C40.2747 24.176 41.0693 24.5227 41.592 24.992C42.1147 25.4613 42.376 26.0853 42.376 26.864C42.376 27.3653 42.2747 27.8187 42.072 28.224C41.8693 28.6187 41.5813 28.96 41.208 29.248C40.8347 29.536 40.3813 29.76 39.848 29.92C39.3253 30.0693 38.7333 30.144 38.072 30.144ZM44.8891 30.096C44.6331 30.096 44.4358 30.0213 44.2971 29.872C44.1585 29.712 44.0891 29.4933 44.0891 29.216V22.976C44.0891 22.6987 44.1585 22.4853 44.2971 22.336C44.4358 22.1867 44.6331 22.112 44.8891 22.112C45.1451 22.112 45.3425 22.1867 45.4811 22.336C45.6305 22.4853 45.7051 22.6987 45.7051 22.976V29.216C45.7051 29.4933 45.6358 29.712 45.4971 29.872C45.3585 30.0213 45.1558 30.096 44.8891 30.096ZM44.8891 20.448C44.5691 20.448 44.3185 20.368 44.1371 20.208C43.9665 20.048 43.8811 19.824 43.8811 19.536C43.8811 19.2373 43.9665 19.0133 44.1371 18.864C44.3185 18.704 44.5691 18.624 44.8891 18.624C45.2091 18.624 45.4545 18.704 45.6251 18.864C45.8065 19.0133 45.8971 19.2373 45.8971 19.536C45.8971 19.824 45.8065 20.048 45.6251 20.208C45.4545 20.368 45.2091 20.448 44.8891 20.448ZM51.5158 33.024C50.9398 33.024 50.3798 32.9653 49.8358 32.848C49.3024 32.7307 48.8171 32.5387 48.3798 32.272C48.2198 32.1867 48.1131 32.08 48.0598 31.952C48.0064 31.8347 47.9904 31.712 48.0118 31.584C48.0438 31.456 48.1024 31.344 48.1878 31.248C48.2731 31.152 48.3744 31.088 48.4918 31.056C48.6198 31.024 48.7531 31.0453 48.8918 31.12C49.3611 31.376 49.8038 31.5467 50.2198 31.632C50.6464 31.728 51.0411 31.776 51.4038 31.776C52.1504 31.776 52.7104 31.584 53.0838 31.2C53.4571 30.8267 53.6438 30.272 53.6438 29.536V27.904H53.7878C53.6278 28.4907 53.2918 28.9547 52.7798 29.296C52.2678 29.6373 51.6758 29.808 51.0038 29.808C50.2998 29.808 49.6864 29.648 49.1638 29.328C48.6411 28.9973 48.2358 28.544 47.9478 27.968C47.6598 27.3813 47.5158 26.6987 47.5158 25.92C47.5158 25.3333 47.5958 24.8053 47.7558 24.336C47.9264 23.8667 48.1611 23.4613 48.4598 23.12C48.7691 22.7787 49.1371 22.5173 49.5638 22.336C50.0011 22.144 50.4811 22.048 51.0038 22.048C51.6864 22.048 52.2784 22.2187 52.7798 22.56C53.2918 22.9013 53.6224 23.3653 53.7718 23.952L53.6118 24.224V22.896C53.6118 22.6293 53.6811 22.4267 53.8198 22.288C53.9691 22.1493 54.1664 22.08 54.4118 22.08C54.6678 22.08 54.8651 22.1493 55.0038 22.288C55.1424 22.4267 55.2118 22.6293 55.2118 22.896V29.344C55.2118 30.56 54.8971 31.4773 54.2678 32.096C53.6384 32.7147 52.7211 33.024 51.5158 33.024ZM51.3878 28.544C51.8571 28.544 52.2571 28.4373 52.5878 28.224C52.9184 28.0107 53.1744 27.7067 53.3558 27.312C53.5371 26.9173 53.6278 26.4533 53.6278 25.92C53.6278 25.12 53.4251 24.4853 53.0198 24.016C52.6251 23.5467 52.0811 23.312 51.3878 23.312C50.9291 23.312 50.5344 23.4187 50.2038 23.632C49.8731 23.8453 49.6118 24.1493 49.4198 24.544C49.2384 24.928 49.1478 25.3867 49.1478 25.92C49.1478 26.7307 49.3504 27.3707 49.7558 27.84C50.1611 28.3093 50.7051 28.544 51.3878 28.544ZM58.2798 30.112C58.0238 30.112 57.8264 30.0427 57.6878 29.904C57.5491 29.7547 57.4798 29.552 57.4798 29.296V22.896C57.4798 22.6293 57.5491 22.4267 57.6878 22.288C57.8264 22.1493 58.0184 22.08 58.2638 22.08C58.5198 22.08 58.7118 22.1493 58.8398 22.288C58.9784 22.4267 59.0478 22.6293 59.0478 22.896V24.144L58.8718 23.856C59.1064 23.2587 59.4744 22.8107 59.9758 22.512C60.4771 22.2027 61.0531 22.048 61.7038 22.048C62.3224 22.048 62.8344 22.1653 63.2398 22.4C63.6558 22.624 63.9651 22.9707 64.1678 23.44C64.3704 23.8987 64.4718 24.48 64.4718 25.184V29.296C64.4718 29.552 64.4024 29.7547 64.2638 29.904C64.1251 30.0427 63.9278 30.112 63.6718 30.112C63.4051 30.112 63.2024 30.0427 63.0638 29.904C62.9251 29.7547 62.8558 29.552 62.8558 29.296V25.28C62.8558 24.608 62.7224 24.1173 62.4558 23.808C62.1998 23.4987 61.7944 23.344 61.2398 23.344C60.5891 23.344 60.0664 23.5467 59.6718 23.952C59.2878 24.3573 59.0958 24.9013 59.0958 25.584V29.296C59.0958 29.84 58.8238 30.112 58.2798 30.112ZM73.7013 30.144C73.0719 30.144 72.5439 30.0267 72.1173 29.792C71.7013 29.5573 71.3866 29.2107 71.1733 28.752C70.9706 28.2827 70.8693 27.696 70.8693 26.992V22.896C70.8693 22.6187 70.9386 22.416 71.0773 22.288C71.2159 22.1493 71.4133 22.08 71.6693 22.08C71.9253 22.08 72.1226 22.1493 72.2613 22.288C72.4106 22.416 72.4853 22.6187 72.4853 22.896V27.008C72.4853 27.6373 72.6133 28.1013 72.8693 28.4C73.1253 28.6987 73.5306 28.848 74.0853 28.848C74.6933 28.848 75.1839 28.6453 75.5573 28.24C75.9413 27.824 76.1333 27.28 76.1333 26.608V22.896C76.1333 22.6187 76.2026 22.416 76.3413 22.288C76.4799 22.1493 76.6826 22.08 76.9493 22.08C77.2053 22.08 77.4026 22.1493 77.5413 22.288C77.6799 22.416 77.7493 22.6187 77.7493 22.896V29.296C77.7493 29.84 77.4879 30.112 76.9653 30.112C76.7199 30.112 76.5279 30.0427 76.3893 29.904C76.2506 29.7547 76.1813 29.552 76.1813 29.296V27.936L76.3893 28.288C76.1759 28.8853 75.8346 29.344 75.3653 29.664C74.8959 29.984 74.3413 30.144 73.7013 30.144ZM80.8266 32.992C80.5706 32.992 80.3733 32.9227 80.2346 32.784C80.096 32.6453 80.0266 32.4427 80.0266 32.176V22.896C80.0266 22.6293 80.096 22.4267 80.2346 22.288C80.3733 22.1493 80.5653 22.08 80.8106 22.08C81.0666 22.08 81.264 22.1493 81.4026 22.288C81.5413 22.4267 81.6106 22.6293 81.6106 22.896V24.288L81.4346 23.952C81.6053 23.376 81.9413 22.9173 82.4426 22.576C82.944 22.224 83.536 22.048 84.2186 22.048C84.912 22.048 85.5146 22.2133 86.0266 22.544C86.5493 22.8747 86.9493 23.3387 87.2266 23.936C87.5146 24.5333 87.6586 25.2533 87.6586 26.096C87.6586 26.9173 87.5146 27.6373 87.2266 28.256C86.9493 28.864 86.5546 29.3333 86.0426 29.664C85.5306 29.984 84.9226 30.144 84.2186 30.144C83.5466 30.144 82.96 29.9733 82.4586 29.632C81.9573 29.2907 81.6213 28.8373 81.4506 28.272H81.6426V32.176C81.6426 32.4427 81.568 32.6453 81.4186 32.784C81.28 32.9227 81.0826 32.992 80.8266 32.992ZM83.8186 28.896C84.2666 28.896 84.656 28.7893 84.9866 28.576C85.3173 28.3627 85.5733 28.048 85.7546 27.632C85.936 27.216 86.0266 26.704 86.0266 26.096C86.0266 25.1787 85.824 24.4853 85.4186 24.016C85.024 23.5467 84.4906 23.312 83.8186 23.312C83.3813 23.312 82.992 23.4187 82.6506 23.632C82.32 23.8347 82.064 24.144 81.8826 24.56C81.7013 24.976 81.6106 25.488 81.6106 26.096C81.6106 27.0027 81.8133 27.696 82.2186 28.176C82.624 28.656 83.1573 28.896 83.8186 28.896ZM96.1945 30.144C95.6505 30.144 95.1598 30.0373 94.7225 29.824C94.2958 29.6107 93.9598 29.3227 93.7145 28.96C93.4692 28.5973 93.3465 28.1867 93.3465 27.728C93.3465 27.152 93.4905 26.6987 93.7785 26.368C94.0772 26.0267 94.5625 25.7867 95.2345 25.648C95.9172 25.4987 96.8345 25.424 97.9865 25.424H98.7385V26.416H98.0025C97.2345 26.416 96.6265 26.4533 96.1785 26.528C95.7305 26.6027 95.4105 26.7307 95.2185 26.912C95.0372 27.0827 94.9465 27.3227 94.9465 27.632C94.9465 28.0373 95.0852 28.368 95.3625 28.624C95.6398 28.8693 96.0238 28.992 96.5145 28.992C96.9092 28.992 97.2558 28.9013 97.5545 28.72C97.8532 28.528 98.0878 28.272 98.2585 27.952C98.4398 27.632 98.5305 27.264 98.5305 26.848V25.008C98.5305 24.4 98.4025 23.9627 98.1465 23.696C97.8905 23.4293 97.4692 23.296 96.8825 23.296C96.5412 23.296 96.1838 23.3387 95.8105 23.424C95.4478 23.5093 95.0692 23.6533 94.6745 23.856C94.4932 23.9413 94.3385 23.968 94.2105 23.936C94.0825 23.904 93.9812 23.8347 93.9065 23.728C93.8318 23.6107 93.7892 23.488 93.7785 23.36C93.7785 23.2213 93.8105 23.088 93.8745 22.96C93.9492 22.832 94.0718 22.736 94.2425 22.672C94.7118 22.448 95.1758 22.288 95.6345 22.192C96.0932 22.096 96.5252 22.048 96.9305 22.048C97.6452 22.048 98.2318 22.16 98.6905 22.384C99.1598 22.608 99.5065 22.9493 99.7305 23.408C99.9545 23.8667 100.067 24.4587 100.067 25.184V29.296C100.067 29.552 100.003 29.7547 99.8745 29.904C99.7465 30.0427 99.5598 30.112 99.3145 30.112C99.0798 30.112 98.8932 30.0427 98.7545 29.904C98.6158 29.7547 98.5465 29.552 98.5465 29.296V28.256H98.6905C98.6052 28.6507 98.4452 28.992 98.2105 29.28C97.9865 29.5573 97.7038 29.7707 97.3625 29.92C97.0212 30.0693 96.6318 30.144 96.1945 30.144ZM105.028 30.144C104.559 30.144 104.074 30.0907 103.572 29.984C103.082 29.8773 102.628 29.696 102.212 29.44C102.074 29.344 101.978 29.2373 101.924 29.12C101.871 29.0027 101.85 28.8853 101.86 28.768C101.882 28.64 101.93 28.5333 102.004 28.448C102.09 28.352 102.191 28.2933 102.308 28.272C102.436 28.2507 102.57 28.2773 102.708 28.352C103.124 28.5867 103.524 28.752 103.908 28.848C104.292 28.9333 104.671 28.976 105.044 28.976C105.61 28.976 106.036 28.8747 106.324 28.672C106.612 28.4693 106.756 28.1973 106.756 27.856C106.756 27.5787 106.66 27.3653 106.468 27.216C106.276 27.056 105.988 26.9333 105.604 26.848L104.084 26.544C103.423 26.4053 102.922 26.16 102.58 25.808C102.239 25.456 102.068 25.008 102.068 24.464C102.068 23.9733 102.202 23.5467 102.468 23.184C102.735 22.8213 103.108 22.544 103.588 22.352C104.068 22.1493 104.623 22.048 105.252 22.048C105.722 22.048 106.164 22.1067 106.58 22.224C106.996 22.3413 107.38 22.5173 107.732 22.752C107.871 22.8267 107.962 22.928 108.004 23.056C108.047 23.1733 108.052 23.2907 108.02 23.408C107.999 23.5253 107.946 23.632 107.86 23.728C107.775 23.8133 107.668 23.8667 107.54 23.888C107.423 23.8987 107.29 23.8667 107.14 23.792C106.82 23.5893 106.5 23.4453 106.18 23.36C105.871 23.2747 105.562 23.232 105.252 23.232C104.687 23.232 104.26 23.3387 103.972 23.552C103.695 23.7547 103.556 24.032 103.556 24.384C103.556 24.6507 103.642 24.8693 103.812 25.04C103.983 25.2107 104.25 25.3333 104.612 25.408L106.132 25.712C106.826 25.8507 107.348 26.0853 107.7 26.416C108.063 26.7467 108.244 27.1947 108.244 27.76C108.244 28.496 107.951 29.0773 107.364 29.504C106.778 29.9307 105.999 30.144 105.028 30.144ZM118.021 30.112C117.754 30.112 117.546 30.0373 117.397 29.888C117.258 29.7387 117.189 29.5307 117.189 29.264V20.112H113.797C113.573 20.112 113.397 20.0533 113.269 19.936C113.141 19.808 113.077 19.632 113.077 19.408C113.077 19.184 113.141 19.0133 113.269 18.896C113.397 18.7787 113.573 18.72 113.797 18.72H122.229C122.464 18.72 122.645 18.7787 122.773 18.896C122.901 19.0133 122.965 19.184 122.965 19.408C122.965 19.632 122.901 19.808 122.773 19.936C122.645 20.0533 122.464 20.112 122.229 20.112H118.837V29.264C118.837 29.5307 118.768 29.7387 118.629 29.888C118.501 30.0373 118.298 30.112 118.021 30.112ZM126.472 30.144C125.619 30.144 124.883 29.984 124.264 29.664C123.656 29.3333 123.181 28.8693 122.84 28.272C122.509 27.664 122.344 26.944 122.344 26.112C122.344 25.3013 122.509 24.592 122.84 23.984C123.171 23.376 123.624 22.9013 124.2 22.56C124.776 22.2187 125.432 22.048 126.168 22.048C126.712 22.048 127.197 22.1387 127.624 22.32C128.051 22.4907 128.413 22.7467 128.712 23.088C129.021 23.4187 129.251 23.824 129.4 24.304C129.56 24.784 129.64 25.3227 129.64 25.92C129.64 26.1013 129.587 26.24 129.48 26.336C129.373 26.4213 129.213 26.464 129 26.464H123.624V25.472H128.552L128.28 25.696C128.28 25.1627 128.2 24.7093 128.04 24.336C127.891 23.9627 127.661 23.68 127.352 23.488C127.053 23.2853 126.68 23.184 126.232 23.184C125.731 23.184 125.304 23.3013 124.952 23.536C124.611 23.7707 124.349 24.096 124.168 24.512C123.987 24.928 123.896 25.4133 123.896 25.968V26.064C123.896 27.0027 124.115 27.712 124.552 28.192C125 28.6613 125.645 28.896 126.488 28.896C126.808 28.896 127.144 28.8533 127.496 28.768C127.859 28.6827 128.2 28.5387 128.52 28.336C128.701 28.2293 128.861 28.1813 129 28.192C129.149 28.2027 129.267 28.2507 129.352 28.336C129.448 28.4213 129.507 28.528 129.528 28.656C129.549 28.784 129.528 28.9173 129.464 29.056C129.4 29.184 129.288 29.3013 129.128 29.408C128.765 29.6533 128.344 29.84 127.864 29.968C127.384 30.0853 126.92 30.144 126.472 30.144ZM133.898 30.144C133.354 30.144 132.863 30.0373 132.426 29.824C131.999 29.6107 131.663 29.3227 131.418 28.96C131.172 28.5973 131.05 28.1867 131.05 27.728C131.05 27.152 131.194 26.6987 131.482 26.368C131.78 26.0267 132.266 25.7867 132.938 25.648C133.62 25.4987 134.538 25.424 135.69 25.424H136.442V26.416H135.706C134.938 26.416 134.33 26.4533 133.882 26.528C133.434 26.6027 133.114 26.7307 132.922 26.912C132.74 27.0827 132.65 27.3227 132.65 27.632C132.65 28.0373 132.788 28.368 133.066 28.624C133.343 28.8693 133.727 28.992 134.218 28.992C134.612 28.992 134.959 28.9013 135.258 28.72C135.556 28.528 135.791 28.272 135.962 27.952C136.143 27.632 136.234 27.264 136.234 26.848V25.008C136.234 24.4 136.106 23.9627 135.85 23.696C135.594 23.4293 135.172 23.296 134.586 23.296C134.244 23.296 133.887 23.3387 133.514 23.424C133.151 23.5093 132.772 23.6533 132.378 23.856C132.196 23.9413 132.042 23.968 131.914 23.936C131.786 23.904 131.684 23.8347 131.61 23.728C131.535 23.6107 131.492 23.488 131.482 23.36C131.482 23.2213 131.514 23.088 131.578 22.96C131.652 22.832 131.775 22.736 131.946 22.672C132.415 22.448 132.879 22.288 133.338 22.192C133.796 22.096 134.228 22.048 134.634 22.048C135.348 22.048 135.935 22.16 136.394 22.384C136.863 22.608 137.21 22.9493 137.434 23.408C137.658 23.8667 137.77 24.4587 137.77 25.184V29.296C137.77 29.552 137.706 29.7547 137.578 29.904C137.45 30.0427 137.263 30.112 137.018 30.112C136.783 30.112 136.596 30.0427 136.458 29.904C136.319 29.7547 136.25 29.552 136.25 29.296V28.256H136.394C136.308 28.6507 136.148 28.992 135.914 29.28C135.69 29.5573 135.407 29.7707 135.066 29.92C134.724 30.0693 134.335 30.144 133.898 30.144ZM143.435 30.144C142.635 30.144 141.942 29.9787 141.355 29.648C140.779 29.3067 140.331 28.832 140.011 28.224C139.691 27.6053 139.531 26.88 139.531 26.048C139.531 25.4293 139.622 24.8747 139.803 24.384C139.985 23.8827 140.241 23.4613 140.571 23.12C140.913 22.7787 141.323 22.5173 141.803 22.336C142.294 22.144 142.838 22.048 143.435 22.048C143.809 22.048 144.198 22.1067 144.603 22.224C145.019 22.3307 145.403 22.512 145.755 22.768C145.894 22.8533 145.979 22.96 146.011 23.088C146.054 23.2053 146.059 23.328 146.027 23.456C146.006 23.584 145.947 23.696 145.851 23.792C145.766 23.8773 145.659 23.9307 145.531 23.952C145.403 23.9627 145.265 23.9253 145.115 23.84C144.859 23.6587 144.598 23.5307 144.331 23.456C144.065 23.3707 143.809 23.328 143.563 23.328C143.179 23.328 142.838 23.392 142.539 23.52C142.251 23.6373 142.006 23.8133 141.803 24.048C141.601 24.272 141.446 24.5547 141.339 24.896C141.243 25.2373 141.195 25.6267 141.195 26.064C141.195 26.9387 141.398 27.6267 141.803 28.128C142.219 28.6187 142.806 28.864 143.563 28.864C143.809 28.864 144.065 28.8267 144.331 28.752C144.598 28.6773 144.859 28.5493 145.115 28.368C145.265 28.2827 145.403 28.2507 145.531 28.272C145.659 28.2933 145.761 28.352 145.835 28.448C145.921 28.5333 145.974 28.64 145.995 28.768C146.027 28.8853 146.022 29.008 145.979 29.136C145.937 29.264 145.846 29.3707 145.707 29.456C145.366 29.7013 144.993 29.8773 144.587 29.984C144.193 30.0907 143.809 30.144 143.435 30.144ZM148.264 30.112C148.008 30.112 147.811 30.0427 147.672 29.904C147.533 29.7547 147.464 29.552 147.464 29.296V19.424C147.464 19.1573 147.533 18.9547 147.672 18.816C147.811 18.6773 148.008 18.608 148.264 18.608C148.52 18.608 148.717 18.6773 148.856 18.816C149.005 18.9547 149.08 19.1573 149.08 19.424V23.856H148.856C149.091 23.2587 149.459 22.8107 149.96 22.512C150.461 22.2027 151.037 22.048 151.688 22.048C152.307 22.048 152.819 22.1653 153.224 22.4C153.64 22.624 153.949 22.9707 154.152 23.44C154.355 23.8987 154.456 24.48 154.456 25.184V29.296C154.456 29.552 154.387 29.7547 154.248 29.904C154.109 30.0427 153.912 30.112 153.656 30.112C153.389 30.112 153.187 30.0427 153.048 29.904C152.909 29.7547 152.84 29.552 152.84 29.296V25.28C152.84 24.608 152.707 24.1173 152.44 23.808C152.184 23.4987 151.779 23.344 151.224 23.344C150.573 23.344 150.051 23.5467 149.656 23.952C149.272 24.3573 149.08 24.9013 149.08 25.584V29.296C149.08 29.84 148.808 30.112 148.264 30.112ZM160.347 30.144C159.494 30.144 158.758 29.984 158.139 29.664C157.531 29.3333 157.056 28.8693 156.715 28.272C156.384 27.664 156.219 26.944 156.219 26.112C156.219 25.3013 156.384 24.592 156.715 23.984C157.046 23.376 157.499 22.9013 158.075 22.56C158.651 22.2187 159.307 22.048 160.043 22.048C160.587 22.048 161.072 22.1387 161.499 22.32C161.926 22.4907 162.288 22.7467 162.587 23.088C162.896 23.4187 163.126 23.824 163.275 24.304C163.435 24.784 163.515 25.3227 163.515 25.92C163.515 26.1013 163.462 26.24 163.355 26.336C163.248 26.4213 163.088 26.464 162.875 26.464H157.499V25.472H162.427L162.155 25.696C162.155 25.1627 162.075 24.7093 161.915 24.336C161.766 23.9627 161.536 23.68 161.227 23.488C160.928 23.2853 160.555 23.184 160.107 23.184C159.606 23.184 159.179 23.3013 158.827 23.536C158.486 23.7707 158.224 24.096 158.043 24.512C157.862 24.928 157.771 25.4133 157.771 25.968V26.064C157.771 27.0027 157.99 27.712 158.427 28.192C158.875 28.6613 159.52 28.896 160.363 28.896C160.683 28.896 161.019 28.8533 161.371 28.768C161.734 28.6827 162.075 28.5387 162.395 28.336C162.576 28.2293 162.736 28.1813 162.875 28.192C163.024 28.2027 163.142 28.2507 163.227 28.336C163.323 28.4213 163.382 28.528 163.403 28.656C163.424 28.784 163.403 28.9173 163.339 29.056C163.275 29.184 163.163 29.3013 163.003 29.408C162.64 29.6533 162.219 29.84 161.739 29.968C161.259 30.0853 160.795 30.144 160.347 30.144ZM166.093 30.112C165.826 30.112 165.623 30.0427 165.485 29.904C165.346 29.7547 165.277 29.552 165.277 29.296V22.896C165.277 22.6293 165.346 22.4267 165.485 22.288C165.623 22.1493 165.815 22.08 166.061 22.08C166.317 22.08 166.509 22.1493 166.637 22.288C166.775 22.4267 166.845 22.6293 166.845 22.896V24.064H166.685C166.855 23.424 167.17 22.9387 167.629 22.608C168.087 22.2773 168.674 22.0853 169.389 22.032C169.581 22.0213 169.73 22.0693 169.837 22.176C169.954 22.2827 170.018 22.448 170.029 22.672C170.05 22.896 170.002 23.0773 169.885 23.216C169.767 23.344 169.586 23.4187 169.341 23.44L169.037 23.472C168.343 23.536 167.815 23.7547 167.453 24.128C167.09 24.5013 166.909 25.0133 166.909 25.664V29.296C166.909 29.552 166.839 29.7547 166.701 29.904C166.573 30.0427 166.37 30.112 166.093 30.112Z" fill="#ABABAD"/>
    </svg>
    
);

const StudentIcon: React.FC<{ className?: string }> = () => (
    <svg width="218" height="51" viewBox="0 0 218 51" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1 9C1 4.58172 4.58172 1 9 1H209C213.418 1 217 4.58172 217 9V41C217 45.4183 213.418 49 209 49H9C4.58172 49 1 45.4183 1 41V9Z" fill="#21B6F8"/>
    <path d="M0.5 9C0.5 4.30558 4.30558 0.5 9 0.5H209C213.694 0.5 217.5 4.30558 217.5 9H216.5C216.5 4.85786 213.142 1.5 209 1.5H9C4.85786 1.5 1.5 4.85786 1.5 9H0.5ZM217.5 42.5C217.5 47.1944 213.694 51 209 51H9C4.30558 51 0.5 47.1944 0.5 42.5L1.5 41C1.5 44.3137 4.85786 47 9 47H209C213.142 47 216.5 44.3137 216.5 41L217.5 42.5ZM9 51C4.30558 51 0.5 47.1944 0.5 42.5V9C0.5 4.30558 4.30558 0.5 9 0.5V1.5C4.85786 1.5 1.5 4.85786 1.5 9V41C1.5 44.3137 4.85786 47 9 47V51ZM209 0.5C213.694 0.5 217.5 4.30558 217.5 9V42.5C217.5 47.1944 213.694 51 209 51V47C213.142 47 216.5 44.3137 216.5 41V9C216.5 4.85786 213.142 1.5 209 1.5V0.5Z" fill="#009BD5"/>
    <path d="M38.12 30.16C37.5333 30.16 36.968 30.1067 36.424 30C35.8907 29.904 35.3947 29.76 34.936 29.568C34.488 29.376 34.088 29.1467 33.736 28.88L34.36 27.264C34.712 27.5093 35.08 27.7227 35.464 27.904C35.8587 28.0747 36.2747 28.208 36.712 28.304C37.16 28.3893 37.6293 28.432 38.12 28.432C38.9627 28.432 39.576 28.2933 39.96 28.016C40.344 27.728 40.536 27.36 40.536 26.912C40.536 26.6667 40.4773 26.4587 40.36 26.288C40.2427 26.1067 40.0507 25.952 39.784 25.824C39.5173 25.696 39.1653 25.5893 38.728 25.504L36.968 25.136C35.9547 24.9227 35.1973 24.5653 34.696 24.064C34.2053 23.552 33.96 22.88 33.96 22.048C33.96 21.344 34.1467 20.7307 34.52 20.208C34.8933 19.6853 35.4107 19.28 36.072 18.992C36.7333 18.704 37.496 18.56 38.36 18.56C38.872 18.56 39.3627 18.6133 39.832 18.72C40.312 18.816 40.7493 18.9653 41.144 19.168C41.5493 19.36 41.9013 19.5947 42.2 19.872L41.576 21.408C41.128 21.0347 40.6373 20.7573 40.104 20.576C39.5707 20.384 38.984 20.288 38.344 20.288C37.8533 20.288 37.432 20.3573 37.08 20.496C36.728 20.6347 36.456 20.832 36.264 21.088C36.0827 21.3333 35.992 21.6267 35.992 21.968C35.992 22.352 36.12 22.6613 36.376 22.896C36.632 23.12 37.0693 23.296 37.688 23.424L39.432 23.792C40.488 24.016 41.272 24.368 41.784 24.848C42.3067 25.328 42.568 25.968 42.568 26.768C42.568 27.44 42.3867 28.032 42.024 28.544C41.6613 29.056 41.144 29.456 40.472 29.744C39.8107 30.0213 39.0267 30.16 38.12 30.16ZM44.5058 20.496V18.544H46.7458V20.496H44.5058ZM44.6338 30V22.176H46.6338V30H44.6338ZM52.8599 33.04C52.1345 33.04 51.4519 32.9547 50.8119 32.784C50.1825 32.624 49.6279 32.3733 49.1479 32.032L49.7239 30.64C50.0225 30.832 50.3372 30.992 50.6679 31.12C50.9985 31.2587 51.3345 31.36 51.6759 31.424C52.0172 31.488 52.3585 31.52 52.6999 31.52C53.4145 31.52 53.9479 31.344 54.2999 30.992C54.6625 30.6507 54.8439 30.1387 54.8439 29.456V28.016H54.9879C54.8279 28.56 54.4919 28.9973 53.9799 29.328C53.4785 29.648 52.9079 29.808 52.2679 29.808C51.5639 29.808 50.9505 29.648 50.4279 29.328C49.9052 28.9973 49.4999 28.5387 49.2119 27.952C48.9239 27.3653 48.7799 26.6827 48.7799 25.904C48.7799 25.1253 48.9239 24.448 49.2119 23.872C49.4999 23.2853 49.9052 22.832 50.4279 22.512C50.9505 22.1813 51.5639 22.016 52.2679 22.016C52.9292 22.016 53.5052 22.1813 53.9959 22.512C54.4972 22.832 54.8225 23.2587 54.9719 23.792H54.8439V22.176H56.7959V29.216C56.7959 30.0587 56.6465 30.7627 56.3479 31.328C56.0492 31.904 55.6065 32.3307 55.0199 32.608C54.4332 32.896 53.7132 33.04 52.8599 33.04ZM52.8119 28.288C53.4305 28.288 53.9212 28.0747 54.2839 27.648C54.6465 27.2213 54.8279 26.64 54.8279 25.904C54.8279 25.168 54.6465 24.592 54.2839 24.176C53.9212 23.7493 53.4305 23.536 52.8119 23.536C52.1932 23.536 51.7025 23.7493 51.3399 24.176C50.9772 24.592 50.7959 25.168 50.7959 25.904C50.7959 26.64 50.9772 27.2213 51.3399 27.648C51.7025 28.0747 52.1932 28.288 52.8119 28.288ZM59.3681 30V22.176H61.3201V23.744H61.1441C61.3788 23.1787 61.7415 22.752 62.2321 22.464C62.7335 22.1653 63.2988 22.016 63.9281 22.016C64.5575 22.016 65.0748 22.1333 65.4801 22.368C65.8855 22.6027 66.1895 22.96 66.3921 23.44C66.5948 23.9093 66.6961 24.5067 66.6961 25.232V30H64.6961V25.328C64.6961 24.9227 64.6428 24.592 64.5361 24.336C64.4401 24.08 64.2855 23.8933 64.0721 23.776C63.8695 23.648 63.6081 23.584 63.2881 23.584C62.9041 23.584 62.5681 23.6693 62.2801 23.84C61.9921 24 61.7681 24.2347 61.6081 24.544C61.4481 24.8427 61.3681 25.1947 61.3681 25.6V30H59.3681ZM78.92 30.16C77.3733 30.16 76.1893 29.76 75.368 28.96C74.5573 28.1493 74.152 26.9547 74.152 25.376V18.72H76.2V25.36C76.2 26.3733 76.4293 27.136 76.888 27.648C77.3573 28.1493 78.0347 28.4 78.92 28.4C79.8053 28.4 80.4773 28.1493 80.936 27.648C81.3947 27.136 81.624 26.3733 81.624 25.36V18.72H83.656V25.376C83.656 26.9547 83.256 28.1493 82.456 28.96C81.656 29.76 80.4773 30.16 78.92 30.16ZM86.3525 32.88V22.176H88.3045V23.824H88.1445C88.3045 23.28 88.6298 22.8427 89.1205 22.512C89.6218 22.1813 90.2032 22.016 90.8645 22.016C91.5472 22.016 92.1445 22.1813 92.6565 22.512C93.1792 22.8427 93.5845 23.312 93.8725 23.92C94.1605 24.5173 94.3045 25.2373 94.3045 26.08C94.3045 26.912 94.1605 27.6373 93.8725 28.256C93.5845 28.864 93.1845 29.3333 92.6725 29.664C92.1605 29.9947 91.5578 30.16 90.8645 30.16C90.2138 30.16 89.6432 30 89.1525 29.68C88.6618 29.3493 88.3312 28.9227 88.1605 28.4H88.3525V32.88H86.3525ZM90.3045 28.64C90.9018 28.64 91.3818 28.4267 91.7445 28C92.1072 27.5627 92.2885 26.9227 92.2885 26.08C92.2885 25.2267 92.1072 24.592 91.7445 24.176C91.3818 23.7493 90.9018 23.536 90.3045 23.536C89.7072 23.536 89.2272 23.7493 88.8645 24.176C88.5018 24.592 88.3205 25.2267 88.3205 26.08C88.3205 26.9227 88.5018 27.5627 88.8645 28C89.2272 28.4267 89.7072 28.64 90.3045 28.64ZM103.835 30.16C103.269 30.16 102.763 30.0533 102.315 29.84C101.877 29.616 101.531 29.3173 101.275 28.944C101.029 28.5707 100.907 28.1493 100.907 27.68C100.907 27.104 101.056 26.6507 101.355 26.32C101.653 25.9787 102.139 25.7333 102.811 25.584C103.483 25.4347 104.384 25.36 105.515 25.36H106.315V26.512H105.531C105.029 26.512 104.608 26.5333 104.267 26.576C103.925 26.608 103.648 26.6667 103.435 26.752C103.232 26.8267 103.083 26.9333 102.987 27.072C102.901 27.2107 102.859 27.3813 102.859 27.584C102.859 27.936 102.981 28.224 103.227 28.448C103.472 28.672 103.813 28.784 104.251 28.784C104.603 28.784 104.912 28.704 105.179 28.544C105.456 28.3733 105.675 28.144 105.835 27.856C105.995 27.568 106.075 27.2373 106.075 26.864V25.024C106.075 24.4907 105.957 24.1067 105.723 23.872C105.488 23.6373 105.093 23.52 104.539 23.52C104.101 23.52 103.653 23.5893 103.195 23.728C102.736 23.856 102.272 24.0587 101.803 24.336L101.227 22.976C101.504 22.784 101.829 22.6187 102.203 22.48C102.587 22.3307 102.987 22.2187 103.403 22.144C103.829 22.0587 104.229 22.016 104.603 22.016C105.371 22.016 106 22.1333 106.491 22.368C106.992 22.6027 107.365 22.96 107.611 23.44C107.856 23.9093 107.979 24.5173 107.979 25.264V30H106.107V28.336H106.235C106.16 28.7093 106.011 29.0347 105.787 29.312C105.573 29.5787 105.301 29.7867 104.971 29.936C104.64 30.0853 104.261 30.16 103.835 30.16ZM113.373 30.16C112.935 30.16 112.509 30.1227 112.093 30.048C111.687 29.9733 111.314 29.872 110.973 29.744C110.631 29.6053 110.333 29.4347 110.077 29.232L110.589 27.92C110.855 28.0907 111.143 28.24 111.453 28.368C111.762 28.496 112.082 28.592 112.413 28.656C112.743 28.72 113.069 28.752 113.389 28.752C113.901 28.752 114.279 28.6667 114.525 28.496C114.781 28.3147 114.909 28.08 114.909 27.792C114.909 27.5467 114.823 27.36 114.653 27.232C114.493 27.0933 114.247 26.992 113.917 26.928L112.317 26.624C111.655 26.496 111.149 26.256 110.797 25.904C110.455 25.5413 110.285 25.0773 110.285 24.512C110.285 24 110.423 23.5573 110.701 23.184C110.989 22.8107 111.383 22.5227 111.885 22.32C112.386 22.1173 112.962 22.016 113.613 22.016C113.986 22.016 114.349 22.0533 114.701 22.128C115.053 22.192 115.383 22.2933 115.693 22.432C116.013 22.56 116.29 22.7307 116.525 22.944L115.981 24.256C115.778 24.0853 115.543 23.9413 115.277 23.824C115.01 23.696 114.733 23.6 114.445 23.536C114.167 23.4613 113.895 23.424 113.629 23.424C113.106 23.424 112.717 23.5147 112.461 23.696C112.215 23.8773 112.093 24.1173 112.093 24.416C112.093 24.64 112.167 24.8267 112.317 24.976C112.466 25.1253 112.695 25.2267 113.005 25.28L114.605 25.584C115.298 25.712 115.821 25.9467 116.173 26.288C116.535 26.6293 116.717 27.088 116.717 27.664C116.717 28.1867 116.578 28.6347 116.301 29.008C116.023 29.3813 115.634 29.6693 115.133 29.872C114.631 30.064 114.045 30.16 113.373 30.16ZM127.714 30.16C127.127 30.16 126.562 30.1067 126.018 30C125.484 29.904 124.988 29.76 124.53 29.568C124.082 29.376 123.682 29.1467 123.33 28.88L123.954 27.264C124.306 27.5093 124.674 27.7227 125.058 27.904C125.452 28.0747 125.868 28.208 126.306 28.304C126.754 28.3893 127.223 28.432 127.714 28.432C128.556 28.432 129.17 28.2933 129.554 28.016C129.938 27.728 130.13 27.36 130.13 26.912C130.13 26.6667 130.071 26.4587 129.954 26.288C129.836 26.1067 129.644 25.952 129.378 25.824C129.111 25.696 128.759 25.5893 128.322 25.504L126.562 25.136C125.548 24.9227 124.791 24.5653 124.29 24.064C123.799 23.552 123.554 22.88 123.554 22.048C123.554 21.344 123.74 20.7307 124.114 20.208C124.487 19.6853 125.004 19.28 125.666 18.992C126.327 18.704 127.09 18.56 127.954 18.56C128.466 18.56 128.956 18.6133 129.426 18.72C129.906 18.816 130.343 18.9653 130.738 19.168C131.143 19.36 131.495 19.5947 131.794 19.872L131.17 21.408C130.722 21.0347 130.231 20.7573 129.698 20.576C129.164 20.384 128.578 20.288 127.938 20.288C127.447 20.288 127.026 20.3573 126.674 20.496C126.322 20.6347 126.05 20.832 125.858 21.088C125.676 21.3333 125.586 21.6267 125.586 21.968C125.586 22.352 125.714 22.6613 125.97 22.896C126.226 23.12 126.663 23.296 127.282 23.424L129.026 23.792C130.082 24.016 130.866 24.368 131.378 24.848C131.9 25.328 132.162 25.968 132.162 26.768C132.162 27.44 131.98 28.032 131.618 28.544C131.255 29.056 130.738 29.456 130.066 29.744C129.404 30.0213 128.62 30.16 127.714 30.16ZM137.733 30.16C136.688 30.16 135.909 29.8987 135.397 29.376C134.885 28.8533 134.629 28.0907 134.629 27.088V23.68H133.125V22.176H134.629V19.84H136.629V22.176H138.997V23.68H136.629V26.976C136.629 27.488 136.741 27.872 136.965 28.128C137.189 28.384 137.552 28.512 138.053 28.512C138.203 28.512 138.357 28.496 138.517 28.464C138.677 28.4213 138.843 28.3787 139.013 28.336L139.317 29.808C139.125 29.9147 138.88 30 138.581 30.064C138.293 30.128 138.011 30.16 137.733 30.16ZM143.622 30.16C142.971 30.16 142.433 30.0427 142.006 29.808C141.579 29.5627 141.259 29.2 141.046 28.72C140.843 28.24 140.742 27.6427 140.742 26.928V22.176H142.742V26.96C142.742 27.3227 142.79 27.6267 142.886 27.872C142.993 28.1173 143.147 28.2987 143.35 28.416C143.563 28.5333 143.83 28.592 144.15 28.592C144.513 28.592 144.827 28.512 145.094 28.352C145.371 28.1813 145.585 27.9467 145.734 27.648C145.894 27.3387 145.974 26.9813 145.974 26.576V22.176H147.974V30H146.022V28.368H146.246C146.022 28.944 145.681 29.3867 145.222 29.696C144.774 30.0053 144.241 30.16 143.622 30.16ZM153.564 30.16C152.881 30.16 152.278 29.9947 151.756 29.664C151.244 29.3333 150.844 28.864 150.556 28.256C150.268 27.6373 150.124 26.912 150.124 26.08C150.124 25.2373 150.268 24.5173 150.556 23.92C150.844 23.312 151.244 22.8427 151.756 22.512C152.278 22.1813 152.881 22.016 153.564 22.016C154.214 22.016 154.78 22.176 155.26 22.496C155.75 22.816 156.081 23.2373 156.252 23.76H156.076V18.72H158.076V30H156.124V28.336H156.268C156.108 28.8907 155.782 29.3333 155.292 29.664C154.801 29.9947 154.225 30.16 153.564 30.16ZM154.124 28.64C154.721 28.64 155.201 28.4267 155.564 28C155.926 27.5627 156.108 26.9227 156.108 26.08C156.108 25.2267 155.926 24.592 155.564 24.176C155.201 23.7493 154.721 23.536 154.124 23.536C153.526 23.536 153.046 23.7493 152.684 24.176C152.321 24.592 152.14 25.2267 152.14 26.08C152.14 26.9227 152.321 27.5627 152.684 28C153.046 28.4267 153.526 28.64 154.124 28.64ZM164.505 30.16C163.62 30.16 162.857 29.9947 162.217 29.664C161.577 29.3333 161.081 28.864 160.729 28.256C160.388 27.648 160.217 26.928 160.217 26.096C160.217 25.2853 160.383 24.576 160.713 23.968C161.055 23.36 161.519 22.8853 162.105 22.544C162.703 22.192 163.38 22.016 164.137 22.016C164.884 22.016 165.524 22.176 166.057 22.496C166.591 22.816 167.001 23.2693 167.289 23.856C167.588 24.4427 167.737 25.1413 167.737 25.952V26.544H161.833V25.392H166.329L166.073 25.632C166.073 24.9067 165.913 24.352 165.593 23.968C165.273 23.5733 164.815 23.376 164.217 23.376C163.769 23.376 163.385 23.4827 163.065 23.696C162.756 23.8987 162.516 24.192 162.345 24.576C162.185 24.9493 162.105 25.3973 162.105 25.92V26.032C162.105 26.6187 162.196 27.104 162.377 27.488C162.559 27.872 162.831 28.16 163.193 28.352C163.556 28.544 164.004 28.64 164.537 28.64C164.975 28.64 165.412 28.576 165.849 28.448C166.287 28.3093 166.687 28.096 167.049 27.808L167.609 29.152C167.236 29.4613 166.767 29.7067 166.201 29.888C165.636 30.0693 165.071 30.16 164.505 30.16ZM169.821 30V22.176H171.773V23.744H171.597C171.832 23.1787 172.195 22.752 172.685 22.464C173.187 22.1653 173.752 22.016 174.381 22.016C175.011 22.016 175.528 22.1333 175.933 22.368C176.339 22.6027 176.643 22.96 176.845 23.44C177.048 23.9093 177.149 24.5067 177.149 25.232V30H175.149V25.328C175.149 24.9227 175.096 24.592 174.989 24.336C174.893 24.08 174.739 23.8933 174.525 23.776C174.323 23.648 174.061 23.584 173.741 23.584C173.357 23.584 173.021 23.6693 172.733 23.84C172.445 24 172.221 24.2347 172.061 24.544C171.901 24.8427 171.821 25.1947 171.821 25.6V30H169.821ZM183.265 30.16C182.219 30.16 181.441 29.8987 180.929 29.376C180.417 28.8533 180.161 28.0907 180.161 27.088V23.68H178.657V22.176H180.161V19.84H182.161V22.176H184.529V23.68H182.161V26.976C182.161 27.488 182.273 27.872 182.497 28.128C182.721 28.384 183.083 28.512 183.585 28.512C183.734 28.512 183.889 28.496 184.049 28.464C184.209 28.4213 184.374 28.3787 184.545 28.336L184.849 29.808C184.657 29.9147 184.411 30 184.113 30.064C183.825 30.128 183.542 30.16 183.265 30.16Z" fill="#181818"/>
    </svg>
    
);

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleTeacherSignup = () => {
    navigate('/signup?role=teacher');
  };

  const handleStudentSignup = () => {
    navigate('/signup?role=student');
  };

  const handleLogoClick = () => {
    navigate('/');
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <nav className="flex flex-col sm:flex-row items-center justify-between px-4 sm:px-6 lg:px-12 py-4 bg-black">
        <div className="w-full flex justify-between items-center sm:w-auto">
          <button 
            className="sm:hidden p-2 text-white absolute left-4"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
              )}
            </svg>
          </button>

          <div 
            onClick={handleLogoClick}
            className="flex items-center mx-auto sm:mx-0 cursor-pointer"
          >
            <img 
              src={Logo}  
              alt="LeanLearn Logo"
              className="h-8 sm:h-10 md:h-12"
            />
          </div>

          <div className="w-6 sm:hidden"></div>
        </div>

        {isMobileMenuOpen && (
          <div className="fixed top-0 left-0 w-full h-full bg-black z-50 flex flex-col items-center justify-center gap-6">
            <button 
              className="absolute top-4 left-4 p-2 text-white"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>

            <img 
              src={Logo}  
              alt="LeanLearn Logo"
              className="h-8 mb-8"
            />

            <div className="flex flex-col items-center gap-4">
              <button
                onClick={() => {
                  handleTeacherSignup();
                  setIsMobileMenuOpen(false);
                }}
                className="transform hover:scale-95 transition-transform duration-200"
              >
                <TeacherIcon className="scale-90" />
              </button>

              <button
                onClick={() => {
                  handleStudentSignup();
                  setIsMobileMenuOpen(false);
                }}
                className="transform hover:scale-95 transition-transform duration-200"
              >
                <StudentIcon className="scale-90" />
              </button>
            </div>
          </div>
        )}

        <div className="hidden sm:flex items-center gap-4">
          <button
            onClick={handleTeacherSignup}
            className="transform hover:scale-95 transition-transform duration-200"
          >
            <TeacherIcon />
          </button>

          <button
            onClick={handleStudentSignup}
            className="transform hover:scale-95 transition-transform duration-200"
          >
            <StudentIcon />
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;