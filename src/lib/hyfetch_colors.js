export function hyfetch_get_colors(theme) {
    // Colors from https://github.com/hykilpikonna/hyfetch/blob/master/hyfetch/presets.py, everything after transgender is translated using Copilot, if there are any mistakes make an issue or a PR
    let colorlist = []
    switch (theme) {
        case 'rainbow':
            colorlist = ['#E50000', '#FF8D00', '#FFEE00', '#028121', '#004CFF', '#770088']
            break;
        case 'transgender':
            colorlist = ['#55CDFD', '#F6AAB7', '#FFFFFF', '#F6AAB7', '#55CDFD']
            break;
        case 'nonbinary':
            colorlist = ['#FCF431', '#FCFCFC', '#9D59D2', '#282828']
            break;
        case 'xenogender':
            colorlist = ['#FF6692', '#FF9A98', '#FFB883', '#FBFFA8', '#85BCFF', '#9D85FF', '#A510FF']
            break;
        case 'agender':
            colorlist = ['#000000', '#BABABA', '#FFFFFF', '#BAF484', '#FFFFFF', '#BABABA', '#000000']
            break;
        case 'queer':
            colorlist = ['#B57FDD', '#FFFFFF', '#49821E']
            break;
        case 'genderfluid':
            colorlist = ['#FE76A2', '#FFFFFF', '#BF12D7', '#000000', '#303CBE']
            break;
        case 'bisexual':
            colorlist = ['#D60270', '#9B4F96', '#0038A8']
            break;
        case 'pansexual':
            colorlist = ['#FF1C8D', '#FFD700', '#1AB3FF']
            break;
        case 'polysexual':
            colorlist = ['#F714BA', '#01D66A', '#1594F6']
            break;
        case 'omnisexual':
            colorlist = ['#FE9ACE', '#FF53BF', '#200044', '#6760FE', '#8EA6FF']
            break;
        case 'omniromantic':
            colorlist = ['#FEC8E4', '#FDA1DB', '#89739A', '#ABA7FE', '#BFCEFF']
            break;
        case 'gay-men':
            colorlist = ['#078D70', '#98E8C1', '#FFFFFF', '#7BADE2', '#3D1A78']
            break;
        case 'lesbian':
            colorlist = ['#D62800', '#FF9B56', '#FFFFFF', '#D462A6', '#A40062']
            break;
        case 'abrosexual':
            colorlist = ['#46D294', '#A3E9CA', '#FFFFFF', '#F78BB3', '#EE1766']
            break;
        case 'asexual':
            colorlist = ['#000000', '#A4A4A4', '#FFFFFF', '#810081']
            break;
        case 'aromantic':
            colorlist = ['#3BA740', '#A8D47A', '#FFFFFF', '#ABABAB', '#000000']
            break;
        case 'aroace1':
            colorlist = ['#E28C00', '#ECCD00', '#FFFFFF', '#62AEDC', '#203856']
            break;
        case 'aroace2':
            colorlist = ['#000000', '#810081', '#A4A4A4', '#FFFFFF', '#A8D47A', '#3BA740']
            break;
        case 'aroace3':
            colorlist = ['#3BA740', '#A8D47A', '#FFFFFF', '#ABABAB', '#000000', '#A4A4A4', '#FFFFFF', '#810081']
            break;
        case 'autosexual':
            colorlist = ['#99D9EA', '#7F7F7F']
            break;
        case 'intergender':
            colorlist = ['#900DC2', '#900DC2', '#FFE54F', '#900DC2', '#900DC2']
            break;
        case 'greygender':
            colorlist = ['#B3B3B3', '#B3B3B3', '#FFFFFF', '#062383', '#062383', '#FFFFFF', '#535353', '#535353']
            break;
        case 'akiosexual':
            colorlist = ['#F9485E', '#FEA06A', '#FEF44C', '#FFFFFF', '#000000']
            break;
        case 'bigender':
            colorlist = ['#C479A2', '#EDA5CD', '#D6C7E8', '#FFFFFF', '#D6C7E8', '#9AC7E8', '#6D82D1']
            break;
        case 'demigender':
            colorlist = ['#7F7F7F', '#C4C4C4', '#FBFF75', '#FFFFFF', '#FBFF75', '#C4C4C4', '#7F7F7F']
            break;
        case 'demiboy':
            colorlist = ['#7F7F7F', '#C4C4C4', '#9DD7EA', '#FFFFFF', '#9DD7EA', '#C4C4C4', '#7F7F7F']
            break;
        case 'demigirl':
            colorlist = ['#7F7F7F', '#C4C4C4', '#FDADC8', '#FFFFFF', '#FDADC8', '#C4C4C4', '#7F7F7F']
            break;
        case 'transmasculine':
            colorlist = ['#FF8ABD', '#CDF5FE', '#9AEBFF', '#74DFFF', '#9AEBFF', '#CDF5FE', '#FF8ABD']
            break;
        case 'transfeminine':
            colorlist = ['#73DEFF', '#FFE2EE', '#FFB5D6', '#FF8DC0', '#FFB5D6', '#FFE2EE', '#73DEFF']
            break;
        case 'genderfaun':
            colorlist = ['#FCD689', '#FFF09B', '#FAF9CD', '#FFFFFF', '#8EDED9', '#8CACDE', '#9782EC']
            break;
        case 'demifaun':
            colorlist = ['#7F7F7F', '#7F7F7F', '#C6C6C6', '#C6C6C6', '#FCC688', '#FFF19C', '#FFFFFF', '#8DE0D5', '#9682EC', '#C6C6C6', '#C6C6C6', '#7F7F7F', '#7F7F7F']
            break;
        case 'genderfae':
            colorlist = ['#97C3A5', '#C3DEAE', '#F9FACD', '#FFFFFF', '#FCA2C4', '#DB8AE4', '#A97EDD']
            break;
        case 'demifae':
            colorlist = ['#7F7F7F', '#7F7F7F', '#C5C5C5', '#C5C5C5', '#97C3A4', '#C4DEAE', '#FFFFFF', '#FCA2C5', '#AB7EDF', '#C5C5C5', '#C5C5C5', '#7F7F7F', '#7F7F7F']
            break;
        case 'neutrois':
            colorlist = ['#FFFFFF', '#1F9F00', '#000000']
            break;
        case 'biromantic1':
            colorlist = ['#8869A5', '#D8A7D8', '#FFFFFF', '#FDB18D', '#151638']
            break;
        case 'biromantic2':
            colorlist = ['#740194', '#AEB1AA', '#FFFFFF', '#AEB1AA', '#740194']
            break;
        case 'autoromantic':
            colorlist = ['#99D9EA', '#99D9EA', '#3DA542', '#7F7F7F', '#7F7F7F']
            break;
        case 'boyflux2':
            colorlist = ['#E48AE4', '#9A81B4', '#55BFAB', '#FFFFFF', '#A8A8A8', '#81D5EF', '#69ABE5', '#5276D4']
            break;
        case 'girlflux':
            colorlist = ['#f9e6d7', '#f2526c', '#bf0311', '#e9c587', '#bf0311', '#f2526c', '#f9e6d7']
            break;
        case 'genderflux':
            colorlist = ['#f47694', '#f2a2b9', '#cecece', '#7ce0f7', '#3ecdf9', '#fff48d']
            break;
        case 'finsexual':
            colorlist = ['#B18EDF', '#D7B1E2', '#F7CDE9', '#F39FCE', '#EA7BB3']
            break;
        case 'unlabeled1':
            colorlist = ['#EAF8E4', '#FDFDFB', '#E1EFF7', '#F4E2C4']
            break;
        case 'unlabeled2':
            colorlist = ['#250548', '#FFFFFF', '#F7DCDA', '#EC9BEE', '#9541FA', '#7D2557']
            break;
        case 'pangender':
            colorlist = ['#FFF798', '#FEDDCD', '#FFEBFB', '#FFFFFF', '#FFEBFB', '#FEDDCD', '#FFF798']
            break;
        case 'pangender.contrast':
            colorlist = ['#ffe87f', '#fcbaa6', '#fbc9f3', '#FFFFFF', '#fbc9f3', '#fcbaa6', '#ffe87f']
            break;
        case 'gendernonconforming1':
            colorlist = ['#50284d', '#96467b', '#5c96f7', '#ffe6f7', '#5c96f7', '#96467b', '#50284d']
            break;
        case 'gendernonconforming2':
            colorlist = ['#50284d', '#96467b', '#5c96f7', '#ffe6f7', '#5c96f7', '#96467b', '#50284d']
            break;
        case 'femboy':
            colorlist = ['#d260a5', '#e4afcd', '#fefefe', '#57cef8', '#fefefe', '#e4afcd', '#d260a5']
            break;
        case 'tomboy':
            colorlist = ['#2f3fb9', '#613a03', '#fefefe', '#f1a9b7', '#fefefe', '#613a03', '#2f3fb9']
            break;
        case 'gynesexual':
            colorlist = ['#F4A9B7', '#903F2B', '#5B953B']
            break;
        case 'androsexual':
            colorlist = ['#01CCFF', '#603524', '#B799DE']
            break;
        case 'gendervoid':
            colorlist = ['#081149', '#4B484B', '#000000', '#4B484B', '#081149']
            break;
        case 'voidgirl':
            colorlist = ['#180827', '#7A5A8B', '#E09BED', '#7A5A8B', '#180827']
            break;
        case 'voidboy':
            colorlist = ['#0B130C', '#547655', '#66B969', '#547655', '#0B130C']
            break;
        case 'nonhuman-unity':
            colorlist = ['#177B49', '#FFFFFF', '#593C90']
            break;
        case 'plural':
            colorlist = ['#2D0625', '#543475', '#7675C3', '#89C7B0', '#F3EDBD']
            break;
        case 'fraysexual':
            colorlist = ['#226CB5', '#94E7DD', '#FFFFFF', '#636363']
            break;
        case 'bear':
            colorlist = ['#623804', '#D56300', '#FEDD63', '#FEE6B8', '#FFFFFF', '#555555']
            break;
        case 'butch':
            colorlist = ['#D72800', '#F17623', '#FF9C56', '#FFFDF6', '#FFCE89', '#FEAF02', '#A37000']
            break;
        case 'leather':
            colorlist = ['#000000', '#252580', '#000000', '#252580', '#FFFFFF', '#252580', '#000000', '#252580', '#000000']
            break;
        case 'otter':
            colorlist = ['#263881', '#5C9DC9', '#FFFFFF', '#3A291D', '#5C9DC9', '#263881']
            break;
        case 'twink':
            colorlist = ['#FFB2FF', '#FFFFFF', '#FFFF81']
            break;
        case 'kenochoric':
            colorlist = ['#000000', '#2E1569', '#824DB7', '#C7A1D6']
            break;
        case 'veldian':
            colorlist = ['#D182A8', '#FAF6E0', '#69ACBE', '#5D448F', '#3A113E']
            break;
        case 'solian':
            colorlist = ['#FFF8ED', '#FFE7A8', '#F1B870', '#A56058', '#46281E']
            break;
        case 'lunian':
            colorlist = ['#2F0E62', '#6F41B1', '#889FDF', '#7DDFD5', '#D2F2E2']
            break;
        case 'polyam':
            colorlist = ['#FFFFFF', '#FCBF00', '#009FE3', '#E50051', '#340C46']
            break;
        case 'sapphic':
            colorlist = ['#FD8BA8', '#FBF2FF', '#C76BC5', '#FDD768', '#C76BC5', '#FBF2FF', '#FD8BA8']
            break;
        case 'androgyne':
            colorlist = ['#FE007F', '#9832FF', '#00B8E7']
            break;
        case 'interprogress':
            colorlist = ['#FFD800', '#7902AA', '#FFFFFF', '#FFAFC8', '#74D7EE', '#613915', '#000000', '#E50000', '#FF8D00', '#FFEE00', '#028121', '#004CFF', '#770088']
            break;
        case 'progress':
            colorlist = ['#FFFFFF', '#FFAFC8', '#74D7EE', '#613915', '#000000', '#E50000', '#FF8D00', '#FFEE00', '#028121', '#004CFF', '#770088']
            break;
        case 'intersex':
            colorlist = ['#FFD800', '#FFD800', '#7902AA', '#FFD800', '#FFD800']
            break;
        case 'old-polyam':
            colorlist = ['#0000FF', '#FF0000', '#FFFF00', '#FF0000', '#000000']
            break;
        case 'equal-rights':
            colorlist = ['#0000FF', '#0000FF', '#FFFF00', '#0000FF', '#0000FF', '#FFFF00', '#0000FF', '#0000FF']
            break;
        case 'drag':
            colorlist = ['#CC67FF', '#FFFFFF', '#FFA3E3', '#FFFFFF', '#3366FF']
            break;
        case 'pronounfluid':
            colorlist = ['#ffb3f9', '#ffffff', '#d1fdcb', '#c7b0ff', '#000000', '#b8ccff']
            break;
        case 'pronounflux':
            colorlist = ['#fdb3f8', '#b6ccfa', '#18ddd3', '#64ff89', '#ff7690', '#ffffff']
            break;
        case 'exipronoun':
            colorlist = ['#1c3d34', '#ffffff', '#321848', '#000000']
            break;
        case 'neopronoun':
            colorlist = ['#bcec64', '#ffffff', '#38077a']
            break;
        case 'neofluid':
            colorlist = ['#ffeca0', '#ffffff', '#ffeca0', '#38087a', '#bcec64']
            break;
        case 'genderqueer':
            colorlist = ['#b57edc', '#b57edc', '#ffffff', '#ffffff', '#4a8123', '#4a8123']
            break;
        case 'cisgender':
            colorlist = ['#D70270', '#0038A7']
            break;
        case 'baker':
            colorlist = ['#F23D9E', '#F80A24', '#F78022', '#F9E81F', '#1E972E', '#1B86BC', '#243897', '#6F0A82']
            break;
        case 'caninekin':
            colorlist = ['#2d2822', '#543d25', '#9c754d', '#e8dac2', '#cfad8c', '#b77b55', '#954e31']
            break;
        case 'beiyang':
            colorlist = ['#DF1B12', '#FFC600', '#01639D', '#FFFFFF', '#000000']
            break;
        case 'burger':
            colorlist = ['#F3A26A', '#498701', '#FD1C13', '#7D3829', '#F3A26A']
            break;
        case 'throatlozenges':
            colorlist = ['#2759DA', '#03940D', '#F5F100', '#F59B00', '#B71212']
            break;
        case 'band':
            colorlist = ['#2670c0', '#f5bd00', '#dc0045', '#e0608e']
            break;
        default:
            colorlist = ['#9683ec']
            break;
    }
    // I was gonna do logic here that would use divisions ect, but i'm not smart enough and doing case is just gonna take less time
    let colordistribution = [12]
    switch (colorlist.length) {
        case 1:
            colordistribution = [12] 
            break;
        case 2:
            colordistribution = [6, 6] 
            break;
        case 3:
            colordistribution = [4, 4, 4] 
            break;
        case 4:
            colordistribution = [3, 3, 3, 3] 
            break;
        case 5:
            colordistribution = [2, 2, 4, 2, 2] 
            break;
        case 6:
            colordistribution = [2, 2, 2, 2, 2, 2] 
            break;
        case 7:
            colordistribution = [1, 2, 2, 2, 2, 2, 1]
        case 8:
            colordistribution = [1, 1, 2, 2, 2, 2, 1, 1] 
            break;
        case 9:
            colordistribution = [1, 1, 1, 2, 2, 2, 1, 1, 1] 
            break;
        case 10:
            colordistribution = [1, 1, 1, 1, 2, 2, 1, 1, 1, 1] 
            break;
        case 11:
            colordistribution = [1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1] 
            break;
        case 12:
            colordistribution = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1] 
            break;
        default:
            colordistribution = null
            break;
    }    
    const colors = [];
    if (colordistribution != null) {
        let currentColor_index = 0;
        for (let i = 0; i < colordistribution.length; i++) {
            let lineNumber = colordistribution[i];
            let currentColor = colorlist[currentColor_index];

            for (let l = 0; l < lineNumber; l++) {
                colors.push(currentColor);
            }
            currentColor_index++;
        }
    } else {
        colors.push("Over12ColorsError");
    }
    console.log("DEBUG :")
    console.log("Theme: " + theme);
    console.log("Colors: " + colorlist);
    console.log("Color distribution: " + colordistribution);
    console.log("Final colors: " + colors);
    console.log("Colors length: " + colors.length);
    return colors;
}