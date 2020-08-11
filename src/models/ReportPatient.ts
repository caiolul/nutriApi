import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    CreateDateColumn,
    UpdateDateColumn,
    JoinColumn,
    OneToOne,
} from 'typeorm';
import Patient from './Patient';

@Entity('report')
class ReportPatient {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column()
    problemPatient: string;

    @Column()
    patient_id: string;

    @OneToOne(() => Patient)
    @JoinColumn({ name: 'patient_id' })
    patient: Patient;

    @Column()
    weight: number;

    @Column()
    height: number;

    @Column()
    nivelFsica: string;

    @Column()
    cc: number;

    @Column()
    cq: number;

    @Column()
    porcentFat: number;

    @Column()
    tmbValue: number;

    @Column()
    imcValue: number;

    @Column()
    vetValue: number;

    @Column('text')
    medication: string;

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}

export default ReportPatient;
