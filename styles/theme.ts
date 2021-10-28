//theme 정의 [테마]
import { DefaultTheme } from 'styled-components';
// styled.d.ts 파일을보세염
export const theme: DefaultTheme = {  // theme의 타입은 DefaultTheme 에요
    breakPoint: '768px',
    colors: {
        // 원하시는 색상 추가하시고 사용하시면 됩니다:)
        black: '#1e1f1d',
        yellow: '#edb83c',
        orange: '#eb7952',
        blue: '#0066ff',
        gray: '#6e6e6e',
        gray_background: '#f5f5f5',
    },
};