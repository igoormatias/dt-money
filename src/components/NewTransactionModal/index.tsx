import { useState, FormEvent, useContext } from 'react';
import Modal from 'react-modal';
import { TransactionsContext } from '../../TransactionsContext';

import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';

import { Container, Radiobox, TransactionTypeContainer } from './styles'

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
    const { createTransaction } = useContext(TransactionsContext)

    const [type, setType] = useState('deposit');
    const [amount, setAmount] = useState(0);
    const [category, setCategory] = useState('');
    const [title, setTitle] = useState('');

    async function handleFormSubmit(event: FormEvent) {
        event.preventDefault();

      await  createTransaction({
            title,
            amount,
            category,
            type
        })
        setTitle('');
        setAmount(0);
        setCategory('');
        setType('deposit');
        onRequestClose();
    }

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button
                type="button"
                onClick={onRequestClose}
                className="react-modal-close"
            >
                <img src={closeImg} alt="Fechar modal" />
            </button>
            <Container>
                <h2>Nova transação</h2>

                <input placeholder="Título"
                    value={title}
                    onChange={event => setTitle(event.target.value)}
                />


                <input
                    type="number"
                    placeholder="Valor"
                    value={amount}
                    onChange={event => setAmount(Number(event.target.value))}
                />

                <TransactionTypeContainer>
                    <Radiobox
                        type="button"
                        onClick={() => { setType('deposit') }}
                        isActive={type === 'deposit'}
                        activeColor={'green'}
                    >
                        <img src={incomeImg} alt="Entrada" />
                        <span>Entrada</span>
                    </Radiobox>
                    <Radiobox
                        type="button"
                        onClick={() => setType('withdraw')}
                        isActive={type === 'withdraw'}
                        activeColor={'red'}
                    >
                        <img src={outcomeImg} alt="Saída" />
                        <span>Saída</span>
                    </Radiobox>
                </TransactionTypeContainer>
                <input
                    placeholder="Categoria"
                    value={category}
                    onChange={event => setCategory(event.target.value)}
                />
                <button type="submit"
                    onClick={handleFormSubmit}
                >Cadastrar
            </button>
            </Container>

        </Modal>
    );
}