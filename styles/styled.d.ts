// theme type 정의
// DefaultTheme 타입을 사용하게 될 경우 반드시 인터페이스의 규격을 지키셔야됩니다. 
import 'styled-components';
declare module 'styled-components' {
    export interface DefaultTheme {
        breakPoint: string;
        colors: {
            black: string;
            yellow: string;
            orange: string;
            blue: string;
            red: string;
            gray: string;
            gray_background: string;
        };
    }
}