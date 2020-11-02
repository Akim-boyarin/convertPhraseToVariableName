// преобразовать кириллицу в латиницу 

// данный код выполняется только для русских букв
function convertToLatin(importText) {
    let cyrillic = "А_Б_В_Г_Д_Е_Ё_Ж_З_И_Й_К_Л_М_Н_О_П_Р_С_Т_У_Ф_Х_Ц_Ч_Ш_Щ_Ъ_Ы_Ь_Э_Ю_Я_а_б_в_г_д_е_ё_ж_з_и_й_к_л_м_н_о_п_р_с_т_у_ф_х_ц_ч_ш_щ_ъ_ы_ь_э_ю_я".split("_");
    let latin = "A_B_V_G_D_E_Jo_Zh_Z_I_J_K_L_M_N_O_P_R_S_T_U_F_H_C_Ch_Sh_Shh_##_Y_''_Je_Ju_Ja_a_b_v_g_d_e_jo_zh_z_i_j_k_l_m_n_o_p_r_s_t_u_f_h_c_ch_sh_shh_#_y_'_je_ju_ja".split("_");

    let exportText = "";
    for (let i = 0; i < importText.length; i++) {
        let currentImportSymbol = importText[i];
        let symbolCode = currentImportSymbol.codePointAt();
        // значения русских букв в базе Юникода
        let conditionOfCyrillic = symbolCode === 1025 || (symbolCode >= 1040 && symbolCode <= 1103) || symbolCode === 1105;
        let currentExportSymbols = conditionOfCyrillic ? latin[cyrillic.findIndex(letter => letter === currentImportSymbol)] : currentImportSymbol;
        
        exportText += currentExportSymbols;
    }

    return exportText;
}


console.log(convertToLatin("I'm just a simple russian girl - Алёнушка"));