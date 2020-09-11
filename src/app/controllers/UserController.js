import passwordGenerator from 'password-generator';
import Mail from '../lib/Mail';

export default {
    async store (req, res){
        const { name, email } = req.body;

        const user = {
            name,
            email,
            password: passwordGenerator(15, false)
        };

        await Mail.sendMail({
            from: 'BatataFrita <batatafrita@batatafrita.com.br>',
            to: `${name} <${email}>`,
            subject: 'Cadastro de usuário',
            html: `Olá, ${name}, bem-vindo a nossa irmandade`
        })

        return res.json(user);
    }
}
